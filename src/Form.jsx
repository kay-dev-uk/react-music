import { useState } from 'react';
import './App.css';

function Form(){
    const [inputText, setInputText] = useState('');
    const [songName, setSongName] = useState(document.getElementById('div'));

    const getName = (e) => {
        setInputText(e.target.value);
    }
    
    const addSong = (e) => {
        e.preventDefault();
        setSongName(inputText);
        setInputText('');
    }

    return(
        <>
            <form onSubmit={addSong}>
                <input 
                type="text" 
                value={inputText} 
                placeholder='Write a song name:' 
                onChange={getName}/>
                <button type='submit'>Submit</button>
            </form>
            <ul>
            
            </ul>
        </>
    )
}



export default Form;




