import React, { useState } from 'react';
import Data from '../../data/nyc_ttp_pins.json';
import Header from '../Header';
import Card from '../Card';
import styled from 'styled-components';
import InfiniteScroll from '../InfiniteScroll/';
import CircularProgress from '@material-ui/core/CircularProgress';

const Main: React.FC = () => {
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
            const newPins = Data;
            setPins([...pins, ...newPins]);
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
                    atBottom={loadMorePins}
                    onLoad={false}
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
            <LoadingAnimate>
                {loading && <CircularProgress />}Loading more pins!
            </LoadingAnimate>
        </>
    );
};

export default Main;

const MainWrapper = styled.div`
    margin-top: 1em;
    margin-left: 5em;
`;

const LoadingAnimate = styled.div`
    font-size: xx-large;
`;
