import React, { ChangeEvent, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageIcon from '@material-ui/icons/Message';
import Dialog from '@material-ui/core/Dialog';
export default function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    return (
        <Router>
            <NavContainer>
                <NavButtons>
                    <a href="/">
                        <PinterestIcon htmlColor="red" fontSize="large" />
                    </a>
                </NavButtons>

                <HomeLink>Home</HomeLink>
                <SearchContainer>
                    <SearchBar
                        type="search"
                        value={searchValue}
                        placeholder="Search"
                        onChange={changeHandler}
                    ></SearchBar>
                </SearchContainer>

                <NavButtons>
                    <NotificationsIcon
                        htmlColor="black"
                        fontSize="large"
                        onClick={handleOpen}
                    />
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <DialogPopup>
                            Hello!
                            <br />
                            This is a mock up of Pinterest in order to display
                            an infinite-scroll feature.
                            <br />
                            You can scroll down indefinitely and see pictures of
                            adorable felines!
                        </DialogPopup>
                    </Dialog>
                </NavButtons>
                <NavButtons>
                    <a
                        href="http://mleng.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MessageIcon htmlColor="black" fontSize="large" />
                    </a>
                </NavButtons>
                <NavButtons>
                    <a
                        href="https://www.linkedin.com/in/matthew-leng/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AccountCircleIcon htmlColor="black" fontSize="large" />
                    </a>
                </NavButtons>
                <NavButtons>
                    <a
                        href="https://github.com/Mleng89/TTP-Pinterest"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ExpandMoreIcon htmlColor="black" fontSize="large" />
                    </a>
                </NavButtons>
            </NavContainer>
        </Router>
    );
}
const NavContainer = styled.div`
    padding: 12px 4px 4px 16px;
    height: 50px;
    background: white;
    top: 0;
    position: sticky;
    display: flex;
    align-items: center;
    z-index: 1;
`;

const NavButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    &:active {
        transform: translateY(4px);
    }
`;

const HomeLink = styled(NavButtons)`
    background-color: black;
    color: white;
    margin: 1%;
`;
const SearchContainer = styled.div`
    flex: 1;
`;
const SearchBar = styled.input`
    border: 1px solid grey;
    border-radius: 50px;
    height: 50px;
    width: 100%;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
    &:hover,
    &:focus {
        border: 1.5px solid #000;
        background-color: white;
    }
`;
const DialogPopup = styled.p`
    font-size: xx-large;
    text-align: center;
    padding: 1em;
`;
