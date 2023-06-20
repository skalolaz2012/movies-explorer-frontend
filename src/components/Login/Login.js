import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Login.css'

const Login = ({ email }) => {
  function handleLogin(e) {
    e.preventDefault()
  }
  return (
    <>
      <section className="login">
        <div className="login__wrap">
          <Logo login />
          <h1 className="welcome__title">Рады видеть!</h1>
          <form className="sign__form" noValidate onSubmit={handleLogin}>
            <div className="sign__input-fields">
              <div className="sign__input-field">
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
              <div className="sign__input-field sign__input-field_type_password-login">
                <label className="sign__label" htmlFor="password-input">
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="sign__input sign__input_field_password"
                  id="password-input"
                  value=""
                />
                <span className="password-input-error sign__input-error input__error-field"></span>
              </div>
            </div>
            <div className="sign__submit-button-wrap">
              <button
                type="submit"
                className="sign__submit-button sign__submit-button_type_login"
                // ${
                //   !props.isValid ? 'sign__submit-button_disabled' : ''
                // }
                // disabled={!props.isValid}
              >
                <Link className="sign__submit-link" to="/movies">
                  Войти
                </Link>
              </button>
            </div>
          </form>
          <p className="sign__question">
            Ещё не зарегистрированы?{' '}
            <Link to="/signup" className="sign__link">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}

export default Login
