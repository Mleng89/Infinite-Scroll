import React from 'react';
import styled from 'styled-components';

const PinWrap = styled.div`
    display: inline-flex;
    padding: 8px;
    position: relative;
    overflow: hidden;
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
const PinTitle = styled(PinWrap)`
    color: #000000;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    position: absolute;
    top: 80%;
    left: 40%;
    transform: translate(-50%, -50%);
    font-size: large;
    &:hover {
        filter: grayscale(100%);
    }
`;

const Card = pin => {
    return (
        <PinWrap>
            <PinCard>
                <img src={pin.imgUrl} />
            </PinCard>
            <PinTitle>{pin.title}</PinTitle>
        </PinWrap>
    );
};

export default Card;
