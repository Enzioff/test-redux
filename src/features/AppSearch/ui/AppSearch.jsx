import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {searchItems} from "../api/SearchThunk";
import {Input} from "shared/ui/Input";

export const AppSearch = () => {
  const dispatch = useDispatch()
  const currentRequest = useRef(null);
  const [value, setValue] = useState('')
  
  const updateValue = (evt) => {
    const value = evt.target.value;
    setValue(value.trim())
  }
  
  const getProducts = (evt) => {
    evt.preventDefault()
    
    currentRequest.current?.abort();
    currentRequest.current = dispatch(searchItems(encodeURIComponent(value)))
  }
  
  return (
    <form action="#" className={'input-group needs-validation'} noValidate onSubmit={getProducts}>
      <Input type={'search'} placeholder={'Введите артикул'} onChange={updateValue} required/>
      <button className={'btn btn-primary'}>
        Поиск
      </button>
    </form>
  )
}
