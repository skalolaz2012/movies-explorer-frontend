import NavTab from '../NavTab/NavTab'
import './Promo.css'
import landingLogo from '../../images/landing-logo.svg'

const Promo = () => {
  return (
    <div className="promo">
      <div className="promo__wrap">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className="promo__image" alt="Символическое изображение" src={landingLogo} />
      </div>
      <NavTab />
    </div>
  )
}

export default Promo
