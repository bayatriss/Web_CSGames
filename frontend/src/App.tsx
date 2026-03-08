import './App.css';
import Game from './Game/Game';
import NavBar from './Game/Navbar';

function App() {
  return (
    
    <div>
      <div className="title">Retro gaming</div>

      <div className="app-container">
        <div className='header'>
          <NavBar/>
        </div>

        <div className="canvas" ><Game/></div>

      </div>

      <div className="sectionBottom">
        <button>
          Randomize Ground Props Position
        </button>

        <button>
          Add Tree
        </button>
      </div>

    </div>
  );
}

export default App;