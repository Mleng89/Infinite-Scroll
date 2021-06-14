import React from 'react';
import styled from 'styled-components';
const PinCard = styled.div`
    display: grid;
`;
const Card = pin => {
    return (
        <PinCard>
            <img src={pin.imgUrl} />
            <h2>{pin.title}</h2>
        </PinCard>
    );
};

export default Card;
