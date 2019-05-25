import { prepare, render } from 'elementree'

function authenticate (apiInfo) {
  return render`
    <p>Authenticated</p>
  `
}

export default prepare(authenticate)
