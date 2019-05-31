import { prepare, render } from 'elementree'

import authenticate from '../authenticate/authenticate'
import dashboard from '../dashboard/dashboard'
import state from './pto.state'

function pto (state) {
  return render`
    <body>
      ${state.isAuthenticated ? dashboard(state.apiInfo) : authenticate(state.apiInfo)}
    </body>
  `
}

export default prepare(pto, state)
