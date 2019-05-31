const STORAGE_PROP = 'bitovians/api/token'
const VALID_TOKEN = /\b[0-9a-f]{5,40}\b/

export default class APIInfo {
  static isValidToken (token) {
    return token && VALID_TOKEN.test(token)
  }

  constructor () {
    this.url = 'https://bitovi.freshbooks.com/api/2.1/xml-in'
  }

  get isValid () {
    return (APIInfo.isValidToken(this.token) && this.url)
      ? this.url.includes('freshbooks') || this.url.includes('billingarm')
      : false
  }

  get token () {
    return window.localStorage.getItem(STORAGE_PROP)
  }

  set token (token) {
    if (!token) {
      window.localStorage.removeItem(STORAGE_PROP)
    } else {
      window.localStorage.setItem(STORAGE_PROP, token)
    }
  }
}
