import { useEffect } from 'react';
import {useHistory } from 'react-router-dom'


import '../styles/Navbar.css'
let Navbar =({year, month, addMonth, substractMonth, changeDate})=>{

  let history =  useHistory();
  let [ , yearLocation, monthLocation ] = history.location.pathname.split('/')
  yearLocation = Number(yearLocation)
  monthLocation = Number(monthLocation)



  useEffect(()=>{if(month !==monthLocation +1 &&  month !== monthLocation -1)changeDate(yearLocation, monthLocation)}, [yearLocation, monthLocation, changeDate])

  useEffect(()=>{ if(month ===monthLocation +1 ||  month === monthLocation -1) history.push(`/${year}/${month}`)}, [year, month, history])
    
  
  return(
    <nav >
      <button onClick={substractMonth}>{'<'} </button>

    <button onClick={addMonth}> {'>'} </button>

    <h2>{new Date(year, month -1, 1).toLocaleString('default', { month: 'long' })}</h2>
    </nav>
  )
}

export default Navbar