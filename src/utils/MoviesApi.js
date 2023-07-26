import { NOMOREPARTIES_URL } from '../utils/constants'

class MoviesApi {
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

  getAllMovies = async () => {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then(this._checkRes)
  }
}

export const moviesApi = new MoviesApi({
  url: NOMOREPARTIES_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
