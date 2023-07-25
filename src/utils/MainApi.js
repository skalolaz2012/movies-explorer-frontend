import { BASE_URL } from './constants'

class MainApi {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkRes)
  }

  changeUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkRes)
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    }).then(this._checkRes)
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._checkRes)
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkRes)
  }
}

export const mainApi = new MainApi({
  // baseURL: 'https://api.diploma-saperov.nomoredomains.rocks',
  url: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})