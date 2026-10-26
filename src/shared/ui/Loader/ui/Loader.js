export const Loader = ({size = 24, width = 3}) => {
  return (
    <div
      className={'spinner-border p-0'}
      style={{'--bs-spinner-width': `${size}px`, '--bs-spinner-height': `${size}px`, '--bs-spinner-border-width': `${width}px`}}
      role="status"
    >
      <span className="visually-hidden">Загрузка...</span>
    </div>
  )
}
