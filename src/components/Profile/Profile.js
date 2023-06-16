import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './Profile.css'

const Profile = ({ username, email }) => {
  return (
    <>
      <Header loggedIn />
      <section className="profile">
        <h2 className="profile__title">Привет, {username}!</h2>
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
          <button
            type="submit"
            className="profile__submit-button"
            // ${
            //   !props.isValid ? 'profile__submit-button_disabled' : ''
            // }
            // disabled={!props.isValid}
          >
            Редактировать
          </button>
        </form>
        <Link
          className="profile__signout"
          // onClick={handleSignOut}
          to="/signin"
        >
          Выйти из аккаунта
        </Link>
      </section>
    </>
  )
}

export default Profile
