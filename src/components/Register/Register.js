import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Register.css'

const Register = ({ username, email, password }) => {
  function handleRegister(e) {
    e.preventDefault()
  }
  return (
    <main>
      <section className="sign">
        <div className="sign__wrap">
          <div className="sign__top-wrap">
            <Logo login />
            <h1 className="welcome__title">Добро пожаловать!</h1>
            <form className="sign__form" noValidate onSubmit={handleRegister}>
              <div className="sign__input-fields">
                <div className="sign__input-field">
                  <label className="sign__label" htmlFor="name-input">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="sign__input sign__input_field_name"
                    id="name-input"
                    value={username || ''}
                  />
                  <span
                    className="name-input-error input__error input__error-field"
                    // ${
                    //   isValid ? '' : 'input__error_visible'
                    // }`
                  >
                    {/* {errors.name} */}
                  </span>
                </div>
                <div className="sign__input-field sign__input-field_type_email">
                  <label className="sign__label" htmlFor="email-input">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="sign__input sign__input_field_email"
                    id="email-input"
                    value={email || ''}
                  />
                  <span className="email-input-error sign__input-error input__error-field"></span>
                </div>
                <div className="sign__input-field sign__input-field_type_password-register">
                  <label className="sign__label" htmlFor="password-input">
                    Пароль
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="sign__input sign__input_field_password"
                    id="password-input"
                    value={password || ''}
                  />
                  <span className="password-input-error sign__input-error input__error-field">
                    Что-то пошло не так...
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="sign__bottom-wrap sign__bottom-wrap_type_register">
            <button
              type="submit"
              className="sign__submit-button"
              // ${
              //   !props.isValid ? 'sign__submit-button_disabled' : ''
              // }
              // disabled={!props.isValid}
            >
              <Link className="sign__submit-link" to="/signin">
                Зарегистрироваться
              </Link>
            </button>
            <p className="sign__question">
              Уже зарегистрированы?{' '}
              <Link to="/signin" className="sign__link">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register
