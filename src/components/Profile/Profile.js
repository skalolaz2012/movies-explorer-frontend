import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Profile.css'

const Profile = ({ username, email }) => {
  const [handleChangeInputs, setHandleChangeInputs] = useState(false)
  function handleChange(e) {
    e.preventDefault()
  }
  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, {username}!</h1>
        <div className="profile__wrap">
          <div className="profile__form-wrap">
            <form className="profile__form" noValidate>
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
                  value={username || ''}
                />
                <span
                  className="name-input-error profile__input-error input__error-field"
                  // ${
                  //   isValid ? '' : 'input__error_visible'
                  // }`
                >
                  {/* {errors.name} */}
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
                  value={email || ''}
                />
                <span className="email-input-error profile__input-error input__error-field"></span>
              </div>
            </form>
          </div>
        </div>
        <div className="profile__buttons-wrap">
          {handleChangeInputs ? (
            <button
              type="submit"
              className="profile__submit"
              onClick={() => setHandleChangeInputs(!handleChangeInputs)}
              onSubmit={handleChange}
              // ${
              //   !props.isValid ? 'profile__submit-button_disabled' : ''
              // }
              // disabled={!props.isValid}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                type="button"
                className="profile__submit-button"
                onClick={() => setHandleChangeInputs(!handleChangeInputs)}
                // ${
                //   !props.isValid ? 'profile__submit-button_disabled' : ''
                // }
                // disabled={!props.isValid}
              >
                Редактировать
              </button>
              <Link
                className="profile__signout"
                // onClick={handleSignOut}
                to="/signin"
              >
                Выйти из аккаунта
              </Link>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default Profile
