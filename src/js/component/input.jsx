import React from "react"
import { useState } from "react"

export const Input = (form = []) => {
 
    const [input, setInput] = useState('');
    return(
        <form onSubmit={e => {
            e.preventDefault()
        }}>
            <ul className="list-group">
                <input className="form-control" type="text" value={input} onChange={e => setInput(e.target.value)}></input>
            </ul>
        </form>
    )
}


