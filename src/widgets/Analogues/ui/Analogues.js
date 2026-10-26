import {useDispatch, useSelector} from "react-redux";
import {removeSelectedItem} from "shared/store/productsSlice";
import {Analogue} from "entities/Analogue";

export const Analogues = () => {
  const dispatch = useDispatch();
  const {selectedItem, analogues} = useSelector((state) => state.products)
  
  const handleRemoveSelectedItem = () => {
    dispatch(removeSelectedItem())
  }
  
  return (
    <div className={'d-flex flex-column align-items-start gap-2'}>
      <div className={'d-flex flex-column gap-2 w-100 pb-4'}>
        <div className={'pb-2'}>
          <h4 className={'d-flex flex-row gap-2 align-items-center title'}>
            <button className={'d-inline-flex btn btn-primary p-1'} onClick={handleRemoveSelectedItem}>
              <svg width="16" height="16">
                <use href={'assets/sprite.svg#arrow-left'}/>
              </svg>
            </button>
            Аналоги и предложения
          </h4>
          <div className={'d-flex flex-md-row flex-column justify-content-between'}>
            <p className={'text m-0'}>Выбранный производитель: <span className={'fw-medium'}>{selectedItem}</span></p>
            <p className={'text m-0'}>Всего найдено: {analogues?.length ?? '0'}</p>
          </div>
        </div>
        <div className={'list-group'}>
          {
            analogues && analogues.length > 0 && analogues.map(el => (
              <Analogue
                name={el.name}
                number={el.number}
                brand={el.brand}
                price={el.price}
                count={el.count}
                key={el.goodsID}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
