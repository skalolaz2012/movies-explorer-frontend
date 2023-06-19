import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Page404 from '../Page404/Page404'
import Navigation from '../Navigation/Navigation'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    { value: 'Главная', href: '/' },
    { value: 'Фильмы', href: '/movies' },
    { value: 'Сохранённые фильмы', href: '/saved-movies' },
    { value: 'Аккаунт', href: '/profile' },
  ]
  return (
    <div className="App">
      <div className="App__wrap">
        <div className="App__content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    loggedOut
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                  />
                  <Main />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <Header
                    loggedIn
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                  />
                  <Movies />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header
                    loggedIn
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                  />
                  <SavedMovies />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header
                    loggedIn
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                  />
                  <Profile username="Сергей" email="test@test.ru" />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  username="Сергей"
                  email="test@test.ru"
                  password="12345678901234"
                />
              }
            />
            <Route path="/signin" element={<Login email="test@test.ru" />} />
            <Route path="/page404" element={<Page404 />} />
          </Routes>
          <Navigation active={menuActive} setActive={setMenuActive} items={items} />
        </div>
      </div>
    </div>
  )
}

export default App
