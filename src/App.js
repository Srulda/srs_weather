import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { observer } from 'mobx-react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Navbar from './components/Navbar'
import './App.css'

import Favorites from './components/Favorites'
import Home from './components/Home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C38D9E',
    },
    secondary: {
      main: '#41B3A3',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Montserrat", sans-serif',
  },
})

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Route
            exact
            path='/'
            render={({ match }) => <Home match={match} />}
          />
    <Route exact path='/favorites' render={({ match }) => <Favorites match={match} />} />
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
