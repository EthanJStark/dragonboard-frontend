import React, { Component } from 'react'
import '../styles/dash_nav.css'

class DashNav extends Component {
  render () {
    return (
      <nav className="dash-nav">
        <div className="dashboard-menu"> &#9776; Dashboards </div>
        <div className="dashboard-right">
          <div className="logo-white-square">
            <div>D</div>
          </div>
          <div className="dash-nav-right">
            <div className="trial-pill">__ days left of your trial <span>&#8212; Upgrade</span></div>
            <div className="help-nav">
              <p>Help</p>
              <img className="help-arrow" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1OXB4IiBoZWlnaHQ9IjQ1OXB4IiB2aWV3Qm94PSIwIDAgNDU5IDQ1OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU5IDQ1OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KICAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgICAjZXhpdC10by1hcHB7ZmlsbDojZmZmZmZmO30NCiAgPC9zdHlsZT4NCjxnPg0KCTxnIGlkPSJleGl0LXRvLWFwcCI+DQoJCTxwYXRoIGQ9Ik0xODEuMDUsMzIxLjNsMzUuNywzNS43bDEyNy41LTEyNy41TDIxNi43NSwxMDJsLTM1LjcsMzUuN2w2Ni4zLDY2LjNIMHY1MWgyNDcuMzVMMTgxLjA1LDMyMS4zeiBNNDA4LDBINTENCgkJCUMyMi45NSwwLDAsMjIuOTUsMCw1MXYxMDJoNTFWNTFoMzU3djM1N0g1MVYzMDZIMHYxMDJjMCwyOC4wNSwyMi45NSw1MSw1MSw1MWgzNTdjMjguMDUsMCw1MS0yMi45NSw1MS01MVY1MQ0KCQkJQzQ1OSwyMi45NSw0MzYuMDUsMCw0MDgsMHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" role="presentation" />
            </div>
            <div className="account-icon"><span>RR</span></div>
          </div>
        </div>
      </nav>
    )
  }
}

export default DashNav
