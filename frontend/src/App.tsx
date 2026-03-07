import './App.css';
import Game from './Game/Game';
import NavBar from './Game/Navbar';

function App() {
  return (
    <div className="app-container">
      <div className='header'>
        <NavBar/>
      </div>

      <div className="canvas" ><Game/></div>
    </div>


  );
}

export default App;