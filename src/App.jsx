import { Outlet } from 'react-router-dom'
import './App.css'
import Nave from './components/Nav/Nave'


function App() {
 

  return (
    <>
    <Nave/>
    <Outlet />
    </>
  )
}

export default App
