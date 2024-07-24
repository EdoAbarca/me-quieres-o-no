import { useState, useEffect } from 'react';
import './App.css';
// import './index.css';

function App() {
  const [liked, setLiked] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleYesClick = () => {
    setLiked(true);
  };

  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 80);
    setNoButtonStyle({ top: `${randomY}%`, left: `${randomX}%`, position: 'absolute' });
  };

  useEffect(() => {
    if (liked) {
      const audio = new Audio('/zelda.mp3');
      audio.play();
    }
  }, [liked]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 relative">
      {!liked ? (
        <div className="text-center border border-gray-300 rounded-3xl shadow-lg p-8">
          <h1 className="text-2xl py-4 mb-8">Te quiero mucho. ¿Tu me quieres?</h1>
          <button 
            className="px-12 py-2 rounded-full mr-4 border-green-500 text-green-500 border hover:text-white hover:bg-green-500 transition-all duration-[2500] ease-in-out"
            onClick={handleYesClick}
          >
            Sí
          </button>
          <button
            id="noButton"
            className="bg-red-500 text-white px-12 py-2 rounded-full relative transition-all duration-[25] ease-out"
            style={noButtonStyle}
            onMouseEnter={handleNoHover}
          >
            No
          </button>
        </div>
      ) : (
        <div className="w-full max-w-screen-lg mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="w-full h-auto">
              <img src="/ashketchum-pokemon.gif" alt="gif1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto">
              <img src="/cat-driving-serious.gif" alt="gif2" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto">
              <img src="/cute-cat-love.gif" alt="gif3" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto">
              <img src="/gou-goh.gif" alt="gif4" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center relative my-4">
            <h1 className="text-2xl mb-8">Sabía que dirías que sí ♥</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="w-full h-auto">
              <img src="/moti-hearts.gif" alt="gif5" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto">
              <img src="/thanos-twerk-thanos-cheek-clap.gif" alt="gif6" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto">
              <img src="/peter-griffin-popular-vibe.gif" alt="gif7" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto">
              <img src="/quieres.png" alt="image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
