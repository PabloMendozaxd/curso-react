import React from 'react'
import './CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton=msg=>alert(msg);
    return(
        <button onClick={()=>onClickButton('crear')} className="CreateTodoButton">+</button>
    );
}

export {CreateTodoButton};