import { useState, useEffect } from 'react'
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Page404 from '../Page404/Page404'
import Navigation from '../Navigation/Navigation'
import iconPath from '../../images/profile.svg'
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute'
import Preloader from '../Preloader/Preloader'
import { mainApi } from '../../utils/MainApi'
import { auth } from '../../utils/auth'
import './App.css'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { value: 'Главная', href: '/' },
    { value: 'Фильмы', href: '/movies' },
    { value: 'Сохранённые фильмы', href: '/saved-movies' },
    { value: 'Аккаунт', href: '/profile', icon: iconPath },
  ]

  useEffect(() => {
    handleCheckToken()
  }, [])

  const handleCheckToken = () => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      setIsLoading(true)
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true)
            setCurrentUser(data)
            if (pathname === '/signin' || pathname === '/signup') {
              navigate('/movies', { replace: true })
            } else {
              navigate({ pathname }, { replace: true })
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => setIsLoading(false))
    }
  }

  const handleLogin = (email, password) => {
    if (!email || !password) {
      return
    }
    setIsLoading(true)
    auth
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token)
          setIsLoggedIn(true)
          navigate('/movies', { replace: true })
        }
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const handleRegister = (name, email, password) => {
    setIsLoading(true)
    auth
      .register(name, email, password)
      .then((res) => {
        setError(false)
        handleLogin(email, password)
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const handleChangeUser = (data) => {
    mainApi
      .changeUserInfo(data)
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((error) => console.log(error))
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    localStorage.clear()
    navigate('/', { replace: true })
  }

  const handleLikeMovie = (movie, isLiked, id) => {
    if (isLiked) {
      mainApi.deleteMovie(id).then((res) => {
        const updatedFilteredMovies = savedMovies.filter(
          (movie) => movie._id !== id
        )
        setSavedMovies(updatedFilteredMovies)
      })
    } else {
      mainApi
        .saveMovie(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res])
        })
        .catch((error) => console.log(error))
    }
  }

  useEffect(() => {
    if (menuActive) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'visible'
  }, [menuActive])

  useEffect(() => {
    isLoggedIn &&
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
  }, [savedMovies, isLoggedIn])

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          {pathname === '/' ||
          pathname === '/movies' ||
          pathname === '/saved-movies' ||
          pathname === '/profile' ? (
            <Header
              isDark={isLoggedIn}
              menuActive={menuActive}
              setMenuActive={setMenuActive}
            />
          ) : (
            ''
          )}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  onLikeMovie={handleLikeMovie}
                  setSavedMovies={setSavedMovies}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  savedMovies={savedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  onSignOut={handleSignOut}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  onChangeUserInfo={handleChangeUser}
                />
              }
            />
            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Register onRegister={handleRegister} />
                )
              }
            />
            <Route
              path="/signin"
              element={
                isLoggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Navigation
            active={menuActive}
            setActive={setMenuActive}
            items={menuItems}
          />
          {pathname === '/' ||
          pathname === '/movies' ||
          pathname === '/saved-movies' ? (
            <Footer />
          ) : (
            ''
          )}
        </div>
      )}
    </CurrentUserContext.Provider>
  )
}

export default App
