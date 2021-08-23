const BlockInCalendar = ({id, className, PortalLauncher, deleteEvent,events})=> {

  let launchModalHandler=(e)=>{
    if(e.target.tagName === 'BUTTON') deleteEvent( id ,e.target.parentElement.attributes.id.nodeValue)
    else PortalLauncher(id)
  }

  return(
  <div id={id} className={`${className} blockInCalendar`}  onClick={launchModalHandler} >
    <small>{className}</small>
    <p>{id}</p>
    <ul>
      {events[id] &&  events[id].map( (event, i) => <li id={i} key={i} > {event.title} <button>x</button> </li> )}
    </ul>
  </div>
  )
}
export default BlockInCalendar