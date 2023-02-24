import React, { useState, useEffect } from 'react'

const CatFact = () => {

    const [oneFact, setOneFact] = useState([])

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => setOneFact(data.fact))
        .catch(error => console.error(error));
    }, []);
  return (
    <>
        <div>{oneFact}</div>
    </>
  )
}

export default CatFact
