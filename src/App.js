import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <nav className="App">
        <li>
          <Link to="/rating">Rating</Link>
        </li>
        <li>
          <Link to="/catstagram">Catstagram</Link>
        </li>
      </nav>
      <div id="content">
        <Outlet />
      </div>
    </>
  )
}

export default App
