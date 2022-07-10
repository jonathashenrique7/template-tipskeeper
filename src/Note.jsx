import React from 'react'

import './index.css'


export default function Note(props) {
    return (
        <div className='container'>
            <div className='noteStyle'>
                <h2>{ props.title }</h2>
                <p>{ props.content }</p>
            </div>
        </div>
    )
}
