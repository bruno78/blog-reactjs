import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'


// browser history for client-side routing
const history = browserHistory

// Routes
import routes from './routes'

const Routes = (
  <Router history={history}>
    { routes }
  </Router>
)

const app = document.getElementById('app')
render(Routes, app)
