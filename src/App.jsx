import React, { useState } from 'react'
import ToDo from './components/ToDo'
import List from './components/list';
import "./App.css"


function App() {

  const [list, setlist] = useState([]);
  let add = (item) => {
    if (item !== '')
      setlist([...list, item]);
  }
  const deleteitem = (key) => {
    let update = [...list];
    update.splice(key, 1)
    setlist([...update])
  }
  const ResetList = () => {
    setlist([]);
  }

  return (
    <div className='maincontainer'>
      <div className='centercontainer'>
        <ToDo add={add} />
        <hr />
        {list.map((input, i) => {
          return (
            <List key={i} index={i} item={input} deleteitem={deleteitem} />
          )
        })}
      </div>
      <button type="button" className="btn btn-danger" onClick={ResetList}>
        Reset List
      </button>
    </div>

  )
}
export default App