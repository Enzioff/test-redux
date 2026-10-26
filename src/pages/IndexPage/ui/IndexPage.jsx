import {useSelector} from "react-redux";
import {AppSearch} from "features/AppSearch";
import {Products} from "widgets/Products";
import {Analogues} from "widgets/Analogues";

export const IndexPage = () => {
  const {selectedItem, loadingAnalogues} = useSelector((state) => state.products)
  
  return (
    <main className={'pt-5'}>
      <div className="container">
        <div className={'d-flex flex-column gap-3'}>
          <div>
            <div>
              <h2 className="title">Поиск запчастей</h2>
              <p className="text">Введите артикул автозапчасти</p>
            </div>
            <AppSearch/>
          </div>
          {
            !selectedItem || loadingAnalogues
              ? (<Products/>)
              : (<Analogues/>)
          }
        </div>
      </div>
    </main>
  )
}
