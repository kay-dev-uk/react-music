import { useState } from 'react';
import './App.css';

function Songs() {
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

export default Songs;
