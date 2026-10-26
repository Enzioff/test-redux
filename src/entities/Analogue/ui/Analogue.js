export const Analogue = (props) => {
  const {
    name,
    number,
    brand,
    price,
    count
  } = props;
  
  return (
    <article className={'list-group-item'}>
      <h5 className={'title'}>{name}</h5>
      <div>
        <p className={'text'}>Артикул: {number} · Производитель: {brand}</p>
      </div>
      <div className={'d-flex flex-row justify-content-between'}>
        <p className={'fs-4 fw-medium text m-0'}>{price} ₽</p>
        <p className={ count > 0 ? 'text m-0 text-success' : 'text m-0 text-secondary'}>В наличии: {count}</p>
      </div>
    </article>
  )
}
