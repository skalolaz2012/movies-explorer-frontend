import { useNavigate } from 'react-router-dom'
import './Page404.css'

function Page404() {
  const navigate = useNavigate()

  function handleMoveBack() {
    navigate(-1)
  }

  return (
    <main className="page404">
      <div className="page404__wrap">
        <div className="page404__description">
          <h1 className="page404__title">404</h1>
          <p className="page404__text">Страница не найдена</p>
        </div>
        <button className="page404__button" onClick={handleMoveBack}>
          Назад
        </button>
      </div>
    </main>
  )
}

export default Page404
