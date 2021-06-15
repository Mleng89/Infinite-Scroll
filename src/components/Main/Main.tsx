import React, { useState, useRef, useCallback } from 'react';
import Data from '../../data/nyc_ttp_pins.json';
import Header from '../Header';
import Card from '../Card';
import styled from 'styled-components';
import InfiniteScroll from '../InfiniteScroll';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Main() {
    const [pins, setPins] = useState(Data);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const hasMoreData = pins.length < Infinity;

    //RANDOMIZE JSON DATA
    const newData = arr => {
        arr.sort(() => Math.random() - 0.5);
    };
    newData(Data);

    //FUNCTION TO RUN ONCE onBottom IS TRUE
    const loadMorePins = () => {
        setPage(pages => pages + 1);
        setLoading(true);
        setTimeout(() => {
            const newPins = new Array(Data).fill(Data).map(Data => Data);
            setPins([...pins, ...newPins[0]]);
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Header />
            <MainWrapper>
                <InfiniteScroll
                    hasMoreData={hasMoreData}
                    isLoading={loading}
                    onBottom={loadMorePins}
                    onLoad={true}
                >
                    <div>
                        {pins.map(el => {
                            return (
                                <Card
                                    title={
                                        el.title
                                            ? el.title
                                            : 'An adorable feline'
                                    }
                                    imgUrl={el.images.orig.url}
                                    key={Math.random() * 0.5}
                                />
                            );
                        })}
                    </div>
                </InfiniteScroll>
            </MainWrapper>
            <div>{loading && <CircularProgress />}</div>
        </>
    );
}

const MainWrapper = styled.div`
    margin-top: 1em;
    margin-left: 5em;
`;
