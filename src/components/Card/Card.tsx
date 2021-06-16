import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Modal';

const Card = pin => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <PinWrap>
            <PinCard onClick={handleOpen}>
                <img src={pin.imgUrl} />
            </PinCard>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <DialogPopup>
                    <DialogTitle>{pin.title}</DialogTitle>
                    <br />
                    <img src={pin.imgUrl} />
                </DialogPopup>
            </Dialog>

            <PinTitle>{pin.title}</PinTitle>
        </PinWrap>
    );
};

export default Card;

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
const DialogTitle = styled.p`
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    position: absolute;
    left: 50%;
    font-size: medium;
    text-align: center;
    padding: 1em;
`;
const DialogPopup = styled.div`
    position: absolute;
    top: 5%;
    left: 25%;
    background-color: white;
    border: 10px white solid;
`;
