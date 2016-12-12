import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import HomeFooter from '../components/HomeFooter'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('HomeFooter renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HomeFooter />, div)
})
