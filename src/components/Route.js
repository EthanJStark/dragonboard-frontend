import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={App}>

    <IndexRoute component={Dashboard}></IndexRoute>
    <Route path="DashboardBody" component={DashboardBody}></Route>
    <Route path="DashWidgets" component={DashWidgets}></Route>
    </Route>
  </Router>
)
