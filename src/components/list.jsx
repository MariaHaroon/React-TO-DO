import React, { useEffect, useState } from 'react'

function List() {
    const getList = () => {
        let lslist = localStorage.getItem('item');
        if (item) {
            return JSON.parse(lslist);
        } else {
            return [];
        }
    
    }

    const [item, setitem] = useState((''));
    const [todolist, settodolist] = useState(getList);

    const add = () => {
        settodolist([...todolist, item]);
        setitem('')
    }
    
const ResetList = () => {
    setitem([]);
}

    useEffect(
        () => { localStorage.setItem('list', JSON.stringify(item)), [item] }
    )
    return (
        <div className="flex items-center px-3 p-1 gap-1 " >
            <input className="w-full bg-gray-100 p-1 px-2 focus:outline-none dark:bg-gray-500 dark:text-gray-100" placeholder='Add Task here' value={item} onChange={(e) => setitem(e.target.value)} />
            <button className="bg-gray-100 p-2 grid place-content-center rounded-sm text-gray-600 dark:bg-gray-500 dark:text-gray-100" onClick={{ add }}>
                Add Task
            </button>
            <div>
                {item}
            </div>
            <input onClick={ResetList} className="bg-gray-100 p-2 grid place-content-center rounded-sm text-gray-600 dark:bg-gray-500 dark:text-gray-100" type="reset" />

        </div>
    )
}

export default List