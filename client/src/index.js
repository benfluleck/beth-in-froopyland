import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import BaseRoute from './components/pages/HomePage/HomePage'
import './styles/global.css';


const App = () => (<App.Container>
  {/* <App.InnerContainer> */}
    <Router>
      <BaseRoute />
    </Router>
  {/* </App.InnerContainer> */}
</App.Container>)

App.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App
render(<App />, document.getElementById('app'))
