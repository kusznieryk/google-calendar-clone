import React from 'react';
import { Route, Redirect} from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { connect,Provider} from 'react-redux'


import Navbar from '../components/navbar'
import Calendar from './Calendar'

import store from '../utils/redux/store'
import {incAct, decAct, changeDate,addEvent, deleteEvent} from '../utils/redux/actions' 

let App = ()=>{

const {year, month}  = store.getState()['date']

  const mapStateDate = ({date:{month, year}}) => ({month, year});
  const mapDispatchDate = (dispatch)=>{
    return {
      addMonth: ()=>{
        dispatch(incAct())
      },
      substractMonth: ()=>{
        dispatch(decAct())
      },
      changeDate:(year, month) =>{dispatch(changeDate(year,month))}
      }
  }
  const mapStateEvents = ({events})=>({events})
  const mapDispatchEvents = dispatch => ({addEvent: (year, month, day, title)=>{dispatch(addEvent(year, month, day, title))}, deleteEvent:(year,month,day,id)=>{dispatch(deleteEvent(year,month,day,id))}})

  const NavbarCon = connect(mapStateDate, mapDispatchDate)(Navbar)
  const CalendarCon = connect(mapStateEvents, mapDispatchEvents)(Calendar)
  return(
  <Provider store={store}> 
    <Router basename={process.env.PUBLIC_URL}>
      <NavbarCon />
      <Route  exact path='/'> <Redirect to={`/${year}/${month}`} /></Route>
      <Route path='/:year/:month' component={CalendarCon} />
    </Router>
  </Provider>
)}
export default App