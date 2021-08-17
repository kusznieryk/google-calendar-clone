import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect,Provider} from 'react-redux'


import Navbar from '../components/navbar'
import Calendar from '../components/Calendar'

import store from '../utils/redux/store'
import {incAct, decAct} from '../utils/redux/actions' 

let App = ()=>{

  const mapState = ({month, year}) => ({month, year});
  const mapDispatch = (dispatch)=>{
    return {
      addMonth: ()=>{
        dispatch(incAct())
      },
      substractMonth: ()=>{
        dispatch(decAct())
      }
      }
  }

  const NavbarCon = connect(mapState, mapDispatch)(Navbar)

  return(
  <Provider store={store}> 
    <Router>
      <NavbarCon />
      <Route path='/:year/:month' component={Calendar} />
    </Router>
  </Provider>
)}
export default App