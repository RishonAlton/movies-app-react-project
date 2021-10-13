import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import MovieInfo from './Components/MovieInfo'


const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/movies/:id' children={<MovieInfo />} />
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )

}


export default App

