import React from 'react'

function List(props) {

    // const getList = () => {
    //     let lslist = localStorage.getItem('item');
    //     if (item) {
    //         return JSON.parse(lslist);
    //     } else {
    //         return [];
    //     }
    // }
    // }
    // 
    // useEffect(
    //     () => { localStorage.setItem('list', JSON.stringify(item)), [item] }
    // )
    return (
        <>
            <li className='listitem'>
                {props.item}
                <span className='icons'>
                    <i className="fa fa-trash"
                        //    className="fa-solid fa-trash-can icon-delete"
                        onClick={e => {
                            props.deleteitem(props.index)
                        }}
                    ></i>

                </span>
            </li>
        </>
    )
}

export default List