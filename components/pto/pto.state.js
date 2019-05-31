import APIInfo from '../../models/api-info'

export default class PTOState {
  constructor () {
    this.apiInfo = new APIInfo()
  }

  get isAuthenticated () {
    return this.apiInfo.isValid
  }
}
