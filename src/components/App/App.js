import { useState, useEffect } from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import { auth } from '../utils/auth'

import AboutProject from '../AboutProject/AboutProject'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'

function App() {
  return (
    <div className='App'>
      <div className='page__wrap'>
        <div className='page__content'>
          <Header
            email={email}
            handleSignOut={handleSignOut}
            loggedIn={loggedIn}
          />
          <Routes>
              <Route
                path="/"
                element={<AboutProject />}
              />
              <Route
                path="/movies"
                element={<Movies />}
              />
              <Route
                path="/saved-movies"
                element={<SavedMovies />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/sign-up"
                element={<Register onRegister={handleRegister} />}
              />
              <Route
                path="/sign-in"
                element={<Login onLogin={handleLogin} />}
              />
              <Route
                path="*"
                element={
                  loggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in" />
                }
              />
            </Routes>
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default App
