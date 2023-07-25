import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import './Profile.css'

const Profile = ({ onSignOut, onChangeUserInfo }) => {
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
    useFormAndValidation()
  const { currentUser } = useContext(CurrentUserContext)
  const [handleChangeInputs, setHandleChangeInputs] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setValues(currentUser)
      setIsValid(true)
    }
  }, [currentUser, setIsValid, setValues])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email } = values
    onChangeUserInfo({ name, email })
    setHandleChangeInputs(false)
  }

  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <div className="profile__wrap">
          <div className="profile__form-wrap">
            <form className="profile__form" noValidate onSubmit={handleSubmit}>
              <div className="profile__input-field">
                <label className="profile__label" htmlFor="name-input">
                  Имя
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="profile__input profile__input_field_name"
                  id="name-input"
                  value={values.name || ''}
                  onChange={handleChange}
                  disabled={!handleChangeInputs}
                />
                <span
                  className={`name-input-error input__error input__error-field ${
                    isValid ? '' : 'input__error_visible'
                  }`}
                >
                  {errors.name}
                </span>
              </div>
              <div className="profile__separator"></div>
              <div className="profile__input-field">
                <label className="profile__label" htmlFor="email-input">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="profile__input profile__input_field_email"
                  id="email-input"
                  value={values.email || ''}
                  onChange={handleChange}
                  disabled={!handleChangeInputs}
                />
                <span
                  className={`email-input-error input__error input__error-field ${
                    isValid ? '' : 'input__error_visible'
                  }`}
                >
                  {errors.email}
                </span>
              </div>
              <div className="profile__buttons-wrap">
                {handleChangeInputs ? (
                  <button
                    type="submit"
                    className={`profile__submit ${
                      !isValid ||
                      (values.name === currentUser.name &&
                        values.email === currentUser.email)
                        ? 'profile__submit_disabled'
                        : ''
                    }`}
                    disabled={
                      !isValid ||
                      (values.name === currentUser.name &&
                        values.email === currentUser.email)
                    }
                  >
                    Сохранить
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="profile__submit-button"
                      onClick={() => {
                        setHandleChangeInputs(!handleChangeInputs)
                      }}
                    >
                      Редактировать
                    </button>
                    <Link
                      className="profile__signout"
                      onClick={onSignOut}
                      to="/signin"
                    >
                      Выйти из аккаунта
                    </Link>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile
