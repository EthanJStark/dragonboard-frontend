import React, { Component } from 'react'
import DashNav from './DashNav'
import LocalNav from './LocalNav'
import DashboardBody from './DashboardBody'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-home">
        <DashNav/>
        <LocalNav/>
        <DashboardBody/>
      </div>
    )
  }
}

export default Dashboard
