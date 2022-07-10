import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'

import './index.css'
import listNotes from './listNotes'

export default function App() {
  return (
    <div>

      <Header />

      { listNotes.map((item) => {
        return (
          <Note title={ item.title } content={ item.content } />
        )
      }) }
      
      <Footer />
      
    </div>
  )
}
