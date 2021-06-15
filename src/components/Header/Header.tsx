import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PinterestIcon from '@material-ui/icons/Pinterest';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';
export default function Header() {
    const [searchValue, setSearchValue] = useState('');
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    return (
        <NavContainer>
            {/* <StickyHeader> */}
            <NavButtons>
                <PinterestIcon htmlColor="red" fontSize="large" />
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
                <NotificationsIcon fontSize="large" />
            </NavButtons>
            <NavButtons>
                <MessageIcon fontSize="large" />
            </NavButtons>
            <NavButtons>
                <AccountCircleIcon fontSize="large" />
            </NavButtons>
            <NavButtons>
                <ExpandMoreIcon fontSize="large" />
            </NavButtons>
            {/* </StickyHeader> */}
        </NavContainer>
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
const StickyHeader = styled.div``;

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
        border: 1.5px solid #094067;
        background-color: white;
    }
`;
