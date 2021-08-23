import ReactDOM from 'react-dom'
import '../styles/SchedulePortal.css'
import submitHandler from '../utils/functions/eventSubmintHandler'

const ScheduleModal = ({isOpen, PortalCloser, addEvent, date:{day, year, month}})=>{
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if(!isOpen) return null

  return  ReactDOM.createPortal(
    <div className='Portal'>
      <button onClick={PortalCloser}>x</button>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(e.target[0].value)
        submitHandler(e, addEvent)
        PortalCloser()
      }} >

        <input type="text" name="" id="title" placeholder='Add title' autoFocus required/>
        <input type="date" name="" id="date" defaultValue={`${year}-${month}-${day}`}/>
        <input type="submit" id='save' value="save" />
      </form>
      
    </div>,
    document.getElementById('app')
  )
}

export default ScheduleModal