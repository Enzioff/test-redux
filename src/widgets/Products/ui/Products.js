import {useSelector} from "react-redux";
import {Product} from "entities/Product";
import {Loader} from "shared/ui/Loader";

export const Products = () => {
  const {items, loadingItems, error} = useSelector((state) => state.products)
  
  return (<div className={'row row-gap-4 pb-4'}>
    {loadingItems
      ? (<div className={'d-flex justify-content-center'}>
        <Loader/>
      </div>)
      : (items && items.length > 0
        ? items.map(el => (<Product
          count={el.count}
          name={el.name}
          number={el.number}
          price={el.price}
          rate={el.rate}
          brand={el.brand}
          key={el.goodsID}
        />))
        : (<p>{error}</p>))}
  </div>)
}
