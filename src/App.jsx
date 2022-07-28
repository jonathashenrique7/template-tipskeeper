import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

import './index.css'
import CreateArea from './CreateArea'

export default function App() {

  const [ notes, setNotes ] = useState([])

  const addNote = (newNote) => {
    setNotes( (prevNotes) => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter( (noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      { notes.map((item, index) => {
        return (
          <Note 
            key={ index }
            id={ index }
            title={ item.title } 
            content={ item.content } 
            onDelete={deleteNote}
          />
        )
      }) }
      
     <Footer />
    </div>
  )
}
