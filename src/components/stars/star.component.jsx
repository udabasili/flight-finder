import React from 'react'

export default function Star({selected=false}) {
    return (
        <div className={(selected)? "star selected" : "star"}>
            
        </div>
    )
}
