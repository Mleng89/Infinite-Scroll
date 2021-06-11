import React from 'react';
import Data from '../../data/nyc_ttp_pins.json';

/*
//using node.js to access .json
const data = require('../../data/nyc_ttp_pins.json');
*/
function App() {
    // console.log('what is my data', data[2].images);
    console.log('do i have a dataget?', Data);
    function loop() {
        console.log('length of data:', Data.length);
        Data.forEach(ele => {
            console.log('what is each element?', ele);
        });
    }

    // function fetchData() {
    //     fetch(getData)
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //         .catch(err => console.error('error:', err));
    // }
    return (
        <>
            <h1>Info:</h1>
            {Data.map(el => {
                return <p>{el.id} </p>;
            })}
            <button onClick={loop}>hello?</button>
            <div>
                hi
                {Data.map(el => {
                    return <img src={el.images.orig.url} />;
                })}
            </div>
        </>
    );
}

export default App;
