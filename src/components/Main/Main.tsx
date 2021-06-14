import React from 'react';
import Data from '../../data/nyc_ttp_pins.json';
import Header from '../Header';
import Card from '../Card';
/*
//using node.js to access .json
const data = require('../../data/nyc_ttp_pins.json');
*/
export default function Main() {
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
            <Header />

            <div>
                hi - Pins:
                <div>
                    {Data.map(el => {
                        return (
                            <Card
                                title={el.title}
                                imgUrl={el.images.orig.url}
                                key={el.id}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
