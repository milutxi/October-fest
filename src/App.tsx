//import { useState } from 'react'

import './App.scss'
import Beer from './components/Beer'
import Header from './components/Header'

function App() {
 

  return (
    <>
      <Header
        title="October fest"
        subtitle="Germany 2023" />
      <Beer />
    </>
  )
}

export default App
