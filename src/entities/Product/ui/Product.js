import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAnalogues} from "../api/productThunk";
import {setSelectedItem} from "shared/store/productsSlice";
import {Loader} from "shared/ui/Loader";

export const Product = (props) => {
  const dispatch = useDispatch();
  const {selectedItem, loadingAnalogues} = useSelector(state => state.products);
  const {
    number,
    brand
  } = props;
  
  const currentRequest = useRef(null);
  
  const handleSelectProduct = () => {
    currentRequest.current?.abort();
    dispatch(setSelectedItem(brand))
    currentRequest.current = dispatch(fetchAnalogues({
      number: encodeURIComponent(number),
      brand: encodeURIComponent(brand)
    }))
  }
  
  return (
    <article className={'col-md-6 col-sm-12 d-flex flex-column'}>
      <div className={'product-card card h-100'} onClick={handleSelectProduct}>
        <div className={'card-body d-flex flex-row align-items-center justify-content-between'}>
          <h5 className={'card-title m-0'}>{brand}</h5>
          {
            !loadingAnalogues || selectedItem !== brand
              ? (<button className={'btn p-0'}>
                <svg width="18" height="18">
                  <use href={`/assets/sprite.svg#chevron-right`}/>
                </svg>
              </button>)
              : (<Loader size={12} width={2}/>)
          }
        </div>
      </div>
    </article>
  )
}
