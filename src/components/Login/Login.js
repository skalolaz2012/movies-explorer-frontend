import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import Logo from '../Logo/Logo'
import './Login.css'

const Login = ({ onLogin, isLoggedIn, error, errMsg }) => {
  const { values, handleChange, errors, isValid, setIsValid, resetForm } =
    useFormAndValidation()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    onLogin(values.email, values.password)
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies');
    }
  }, [isLoggedIn])

  useEffect(() => {
    setIsValid(false)
  }, [])

  return (
    <main>
      <section className="sign">
        <div className="sign__wrap">
          <div className="sign__top-wrap">
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
                    value={values.email || ''}
                    onChange={handleChange}
                  />
                  <span
                    className={`email-input-error input__error input__error-field ${
                      isValid ? '' : 'input__error_visible'
                    }`}
                  >
                    {errors.email}
                  </span>
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
                    value={values.password || ''}
                    onChange={handleChange}
                  />
                  <span
                    className={`password-input-error input__error input__error-field ${
                      isValid ? '' : 'input__error_visible'
                    }`}
                  >
                    {errors.password}
                  </span>
                </div>
                {error && <span className="sign__error">{errMsg.errorText}</span>}
              </div>
              <button
                type="submit"
                className={`sign__submit-button sign__submit-button_type_login ${
                  !isValid ? 'sign__submit-button_disabled' : ''
                }`}
                disabled={!isValid}
              >
                Войти
              </button>
            </form>
          </div>
          <p className="sign__question">
            Ещё не зарегистрированы?{' '}
            <Link to="/signup" className="sign__link">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login
