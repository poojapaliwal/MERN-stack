import React from 'react'

export default function TodoItems({todo, onDelete}) {
    return (
        <>
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-m" onClick ={()=>onDelete(todo)}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
