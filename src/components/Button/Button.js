import './Button.css'

const Button = ({onClick}) => {
  return <button type="button" onClick={onClick} className="button-more">Ещё</button>
}

export default Button
