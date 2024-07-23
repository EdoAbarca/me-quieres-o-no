import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

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
            className="bg-green-500 text-white px-12 py-2 rounded-full mr-4 transition-all duration-[1500] ease-in-out"
            onClick={handleYesClick}
          >
            Sí
          </button>
          <button
            className="bg-red-500 text-white px-12 py-2 rounded-full relative transition-all duration-[25] ease-out"
            style={noButtonStyle}
            onMouseEnter={handleNoHover}
          >
            No
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl">Sabía que dirías que sí ♥</h1>
        </div>
      )}
    </div>
  );
}

export default App;
