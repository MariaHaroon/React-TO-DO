import React, { useState } from 'react'


function ToDo(props) {
    const [item, setitem] = useState('');
        return (

            <div className="inputcontainer" >
                <input autoFocus
                    className="inputbox"
                    placeholder="Add Task"
                    value={item}
                    onChange={e => {
                        setitem(e.target.value)}}

                    
                />

                <button
                    className="addbutton"
                    onClick={
                        () => {
                            props.add(item)
                            setitem('')
                        }}
                >
                    +
                </button>
            </div>

        );
}

export default ToDo
