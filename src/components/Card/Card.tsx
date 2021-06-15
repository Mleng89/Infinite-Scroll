import React from 'react';
import styled from 'styled-components';

const PinWrap = styled.div`
    display: inline-flex;
    padding: 8px;
`;
const PinCard = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 250px;
    img {
        display: flex;
        width: 100%;
        cursor: zoom-in;
        border-radius: 50px;
        object-fit: cover;
        &:hover {
            filter: grayscale(100%);
        }
    }
`;

const Card = pin => {
    return (
        <PinWrap>
            <PinCard>
                <img src={pin.imgUrl} />
                <h2>{pin.title}</h2>
            </PinCard>
        </PinWrap>
    );
};

export default Card;
