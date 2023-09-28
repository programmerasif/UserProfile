import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Nave from './components/Nav/Nave'


function App() {
 const location = useLocation().pathname.slice(0,8)

  return (
    <>
    {
      location !== "/Profile" && <Nave/>
    }
     <Outlet />
    </>
  )
}

export default App
