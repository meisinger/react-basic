import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

const Hello = () => (
  <div>
    Hello World
  </div>
)

export default () => (
  <Router>
    <Route path='/' component={Hello} />
  </Router>
)
