import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <li>
        <Link to="/rating">Rating</Link>
      </li>
      <li>
        <Link to="/catstagram">Catstagram</Link>
      </li>
    </div>
  );
}

export default App;
