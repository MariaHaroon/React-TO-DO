import React, { useState } from 'react'


function List() {
    const [item, setitem] = useState((""));
    // const [todolist, settodolist] = useState([]);

    const add = () => {
        setitem(...item,e)
    }

    return (
        <div>
            <input value={item} onChange={(e) => setitem(e.target.value)} />
            <button onClick={{ add }}>
                Add Task
            </button>
        </div>
    )
}

export default List