import React from 'react';
import styled from 'styled-components';
const PinCard = styled.div`
    display: grid;
`;
const PinImage = styled.img`
    border-radius: 50px;
    &:hover {
        filter: grayscale(100%);
    }
`;
const Card = pin => {
    return (
        <PinCard>
            <PinImage src={pin.imgUrl} />
            <h2>{pin.title}</h2>
        </PinCard>
    );
};

export default Card;
