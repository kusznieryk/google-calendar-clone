import '../styles/Calendar.css'

import daysOfTheWeek from '../utils/days/names.js'

let Calendar = ({match:{params:{month,year}}}) => {
  let lastDate= new Date(year, month , 0).getDate()
  let dayOfTheWeek = new Date(year,month -1,1).getDay()


  let addDayOfTheWeek=()=>{
    dayOfTheWeek++
    if(dayOfTheWeek>6) dayOfTheWeek=0
  }

  let daysOfTheMonth=[]
  
  for (let i = 1; i <= lastDate;i++) {
    let day = daysOfTheWeek[dayOfTheWeek]
    daysOfTheMonth.push(<div id={i} key={i} className={day}><small>{day}</small><p>{i}</p></div>)
    addDayOfTheWeek()
  }

  return <div className='calendar'>{daysOfTheMonth}</div>
 } 

 export default Calendar