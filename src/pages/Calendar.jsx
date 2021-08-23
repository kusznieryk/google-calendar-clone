import '../styles/Calendar.css'
import BlockInCalendar from '../components/BlockInCalendar'
import daysOfTheWeek from '../utils/days/names.js'
import {useState} from 'react'
import ScheduleModal from '../components/ScheduleModal'



let Calendar = ({match:{params:{month,year}}, events, addEvent,deleteEvent}) => {
  const lastDate= new Date(year, month , 0).getDate()
  let dayOfTheWeek = new Date(year,month -1,1).getDay()
  let daysOfTheMonth=[]
  const shortYear = year.slice(2,4)
  const EventsThisYear = events[shortYear] || []
  const EventsThisMonth = EventsThisYear[month] || []

  const sendDeleteEvent = (day,id) => {deleteEvent(shortYear, month, day, id)}

  const addDayOfTheWeek=()=>{
    dayOfTheWeek++
    if(dayOfTheWeek>6) dayOfTheWeek=0
  }

  let [isOpen, openOrClose] = useState(false)
  let [lastDayClicked, setDayClicked] = useState(0)


  const PortalLauncher = (id) =>{openOrClose(true);setDayClicked(id) }
  const PortalCloser = ()=>{openOrClose(false)}
  
  
  for (let i = 1; i <= lastDate;i++) {
    let day = daysOfTheWeek[dayOfTheWeek]
    daysOfTheMonth.push(<BlockInCalendar id={i} key={i} className={day} PortalLauncher={PortalLauncher} events={EventsThisMonth} deleteEvent={sendDeleteEvent}></BlockInCalendar>)
    addDayOfTheWeek()
  }
  
  
  return (
  <div className='calendar'>
    < ScheduleModal PortalCloser={PortalCloser} isOpen={isOpen} addEvent={addEvent} date={{day:lastDayClicked, year,month}}/>
    {daysOfTheMonth}
  </div>
  )
  }
 export default Calendar