import { prepare, render } from 'elementree'

import state from './dashboard.state'
import './dashboard.less'

function dashboard (state, apiInfo) {
  const dataIsAvailable = !!state.remainingHours

  return render`
    <div class="dashboard">
      <div class="logout">
        <a href="" onclick="${clearAPIToken}">Clear API Token</a>
      </div>
      <div class="display-wrapper">
        <div class="number-wrapper">
          <div class="hours-container">
            ${dataIsAvailable ? state.remainingHours : '--'}
            <h4>hours available</h4>
          </div>
          <div class="days-container">
            ${dataIsAvailable ? state.remainingDays : '--'}
            <h4>days available</h4>
          </div>
        </div>
      </div>
    </div>
  `

  function clearAPIToken (ev) {
    ev.preventDefault()
    apiInfo.token = undefined
  }
}

export default prepare(dashboard, state)
