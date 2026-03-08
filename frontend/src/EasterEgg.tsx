import './App.css';
import meme from'./image/meme.jpg'

function EasterEgg() {
  return (
    <div className="meme">
        <div className="memeTextContainer">
            <div className="memeText">
                Université de Sherbrooke
            </div>
            <div className="memeText">
                    Équipe Artemus
                    <ul>
                        <li>
                            Béatrice Gagnon
                        </li>
                        <li>
                            Jean-François Labbé
                        </li>
                    </ul>
            </div>
            </div>
            
        <div className='memeImage'>
            <img src={meme} alt="meme drole"></img>
        </div>
    </div>
  );
}

export default EasterEgg;