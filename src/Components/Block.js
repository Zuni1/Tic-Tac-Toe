import React from 'react'

export default function Block({value,onClick}){
    return(
        <button className = "btn" onClick = {onClick}>
            {value}
        </button>
    )
}