import { prepare, render } from 'elementree'

function authenticate (apiInfo) {
  return render`
    <p>Not Authenticated</p>
  `
}

export default prepare(authenticate)
