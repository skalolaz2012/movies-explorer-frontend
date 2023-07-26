import { BASE_URL } from '../utils/constants'

class Auth {
  constructor({ url }) {
    this._url = url
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json()
    }
    return res.text().then((text) => {
      return Promise.reject({
        status: res.status,
        errorText:
          JSON.parse(text).message === 'Validation failed'
            ? JSON.parse(text).validation.body.message
            : JSON.parse(text).message,
      })
    })
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._checkRes)
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkRes)
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes)
  }
}

export const auth = new Auth({ url: BASE_URL })
