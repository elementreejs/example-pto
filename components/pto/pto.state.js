import APIInfo from '../../models/api-info'

export default class PTOModel {
  constructor () {
    this.apiInfo = new APIInfo()
  }

  get isAuthenticated () {
    return this.apiInfo.isValid
  }
}
