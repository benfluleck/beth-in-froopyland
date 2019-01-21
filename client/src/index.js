import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import BaseRoute from './components/pages/HomePage/HomePage'
import GlobalStyle from './styles/global'
import ThemeWrapper from './styles/ThemeWrapper/themeWrapper'

const App = () => (
  <ThemeWrapper>
    <Fragment>
      <GlobalStyle />
      <Router>
        <BaseRoute />
      </Router>
    </Fragment>
  </ThemeWrapper>
)

App.Container = styled.div``

export default App
render(<App />, document.getElementById('app'))
