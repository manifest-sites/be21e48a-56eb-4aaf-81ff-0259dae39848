import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import HappyBirthdayApp from './components/HappyBirthdayApp'

function App() {

  return (
    <Monetization>
      <HappyBirthdayApp />
    </Monetization>
  )
}

export default App