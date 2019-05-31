import { prepare, render } from 'elementree'

import authenticate from '../authenticate/authenticate'
import state from './pto.state'

function pto (state) {
  return render`
    <body>
      ${state.isAuthenticated ? 'Authenticated' : authenticate(state.apiInfo)}
    </body>
  `
}

export default prepare(pto, state)
