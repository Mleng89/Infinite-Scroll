import React from 'react';
import Data from '../../data/nyc_ttp_pins.json';
import Header from '../Header';
import Card from '../Card';
import styled from 'styled-components';
/*
//using node.js to access .json
const data = require('../../data/nyc_ttp_pins.json');
*/
export default function Main() {
    console.log('do i have a dataget?', Data);

    // function fetchData() {
    //     fetch(getData)
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //         .catch(err => console.error('error:', err));
    // }
    return (
        <>
            <Header />
            <MainWrapper>
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
            </MainWrapper>
        </>
    );
}

const MainWrapper = styled.div`
    margin-top: 1em;
    margin-left: 5em;
`;
