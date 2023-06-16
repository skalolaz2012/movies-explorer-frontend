import { Route, Routes } from 'react-router-dom'
import './App.css'

import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Page404 from '../Page404/Page404'

function App() {
  return (
    <div className="App">
      <div className="App__wrap">
        <div className="App__content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile username="Сергей" email="test@test.ru" />} />
            <Route path="/signup" element={<Register username="Сергей" email="test@test.ru" password="12345678901234" />} />
            <Route path="/signin" element={<Login email="test@test.ru" />} />
            <Route path="/page404" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
