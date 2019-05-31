import { html, prepare, render } from 'elementree'

import APIToken from '../../models/api-info';

function authenticate (state, apiInfo) {
  return render`
    <div class="authenticate">
      <h1>Bitovi PTO Available</h1>
      <div class="first-step form-wrapper">
        <form>
          <label for="token" class="${!state.validToken && 'invalid-token'}">
            ${state.validToken
                ? 'Freshbooks API Token'
                : html`<i class="fas fa-exclamation-triangle"></i>Double-check your API Token`
            }
          </label>
          <input type="text" id="token" value="${apiInfo.token}" />
          <button onclick="${authenticate}">
            Authenticate
          </button>
          <small>
            <i class="far fa-question-circle"></i>
            To find your API Token, log into Freshbooks, go to 'Profile'
            and scroll to the bottom of that page.
          </small>
        </form>
      </div>
    </div>
  `

  function authenticate(ev) {
    ev.preventDefault()

    const token = document.querySelector('input#token').value
    if (APIToken.isValidToken(token)) {
      state.validToken = true
      apiInfo.token = token
    } else {
      state.validToken = false
      document.querySelector('input#token').select()
    }
  }
}

function authenticateModel () {
  return {
    validToken: true
  }
}

export default prepare(authenticate, authenticateModel)
