import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import Logo from '../Logo/Logo'
import './Register.css'

const Register = ({ onRegister, isLoggedIn }) => {
  const { values, handleChange, errors, isValid, setIsValid, resetForm } =
    useFormAndValidation()
  const navigate = useNavigate()

  function handleRegister(e) {
    e.preventDefault()
    onRegister(values.name, values.email, values.password)
    resetForm()
  }

  useEffect(() => {
    isLoggedIn && navigate('/movies')
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
                    value={values.name || ''}
                    onChange={handleChange}
                  />
                  <span
                    className={`name-input-error input__error input__error-field ${
                      isValid ? '' : 'input__error_visible'
                    }`}
                  >
                    {errors.name}
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
              </div>
              <button
                type="submit"
                className={`sign__submit-button sign__submit-button_type_register ${
                  !isValid ? 'sign__submit-button_disabled' : ''
                }`}
                disabled={!isValid}
              >
                Зарегистрироваться
              </button>
            </form>
          </div>
          <p className="sign__question">
            Уже зарегистрированы?{' '}
            <Link to="/signin" className="sign__link">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register
