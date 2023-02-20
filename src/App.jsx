import { useState } from 'react';
import './App.css';

function App() {
  const [like, setLike] = useState({
    alors: 0,
    papaoutai: 0,
    tousLesMemes: 0,
    formidable: 0
  });

  const addLike = (e, song) => {
    e.preventDefault();
    setLike({ ...like, [song]: like[song] + 1 });
  };

  return (
    <div id='div'>
      <h1>Stromae</h1>
      <p>Stromae (born Paul Van Haver on March 12, 1985) is a Belgian singer, songwriter, rapper, and record producer. He first gained international recognition with his song "Alors on danse" in 2009, which became a hit in many European countries and beyond. Since then, he has released two critically acclaimed studio albums, "Cheese" (2010) and "Racine Carrée" (2013), and has become known for his unique blend of electronic, hip-hop, and world music influences.</p>

      <h2>Songs</h2>
      <h3>Alors on dance - 2009</h3>
      <button type="submit" onClick={(e) => addLike(e, 'alors')}>
        Like {like.alors}
      </button>

      <h3>Papaoutai - 2013</h3>
      <button type="submit" onClick={(e) => addLike(e, 'papaoutai')}>
        Like {like.papaoutai}
      </button>

      <h3>Tous Les Mêmes - 2013</h3>
      <button type="submit" onClick={(e) => addLike(e, 'tousLesMemes')}>
        Like {like.tousLesMemes}
      </button>

      <h3>Formidable - 2013</h3>
      <button type="submit" onClick={(e) => addLike(e, 'formidable')}>
        Like {like.formidable}
      </button>
    </div>
  );
}

export default App;
