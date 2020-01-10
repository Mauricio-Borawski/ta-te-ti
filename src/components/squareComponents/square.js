import React from 'react'

export default function Square(props) {
    return (
        <div>
            <button className="casilla"
            onClick={()=>{props.onClick()}}>{props.value}</button>
        </div>
    )
}
