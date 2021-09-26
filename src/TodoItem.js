import React from 'react'

function TodoItem(props) {
    return (
        <li>
           <span>🤠</span>
           <p>{props.text}</p> 
           <span>❌</span>
        </li>
    )
}

export {TodoItem};
