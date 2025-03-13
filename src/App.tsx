import './App.css'
import { BrowserRouter } from 'react-router'

import Navbar from './components/Navbar.tsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
