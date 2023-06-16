import { useNavigate } from 'react-router-dom'
import './Page404.css'

function Page404() {
  const navigate = useNavigate()

  function handleMoveBack() {
    navigate(-1)
  }

  return (
    <div className="page404">
      <h2 className="page404__title">404</h2>
      <p className="page404__text">Страница не найдена</p>
      <button className="page404__button" onClick={handleMoveBack}>
        Назад
      </button>
    </div>
  )
}

export default Page404
