import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import BaseRoute from './components/pages/HomePage/HomePage'
import GlobalStyle from './styles/global'
import ThemeWrapper from './styles/ThemeWrapper/themeWrapper'

const App = () => (
  <ThemeWrapper>
    <GlobalStyle />
    <App.Container>
      <Router>
        <BaseRoute />
      </Router>
    </App.Container>
  </ThemeWrapper>
)

App.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
render(<App />, document.getElementById('app'))
