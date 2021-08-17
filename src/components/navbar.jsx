import {useHistory } from 'react-router-dom'
let Navbar =({year, month, addMonth, substractMonth})=>{

  let history =  useHistory();
  console.log(month)
  history.push(`/${year}/${month}`)
  return(
    <nav>
      <button onClick={substractMonth}> {'<'} </button>

    <button onClick={addMonth}> {'>'} </button>
    </nav>
  )
}

export default Navbar