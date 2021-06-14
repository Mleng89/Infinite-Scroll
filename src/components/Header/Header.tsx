import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export default function Header() {
    const [searchValue, setSearchValue] = useState('');
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    return (
        <StickyHeader>
            <h1>Header</h1>
            <SearchContainer>
                <SearchBar
                    type="search"
                    value={searchValue}
                    placeholder="Search"
                    onChange={changeHandler}
                ></SearchBar>
            </SearchContainer>
            <NavButtons>Home</NavButtons>
            <NavButtons>Explore</NavButtons>
            <NavButtons>User</NavButtons>
        </StickyHeader>
    );
}

const StickyHeader = styled.div`
    padding: 12px 4px 4px 16px;
    height: 50px;
    background: white;
    top: 0;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;
const HomeButton = styled.div``;
const SearchContainer = styled.div`
    margin: 0.05em;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SearchBar = styled.input`
    margin: 1em;
    border: 1px solid grey;
    border-radius: 20px;
    height: 40px;
    //Need to think about responsive design below:
    width: 500px;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
    &:hover,
    &:focus {
        border: 1.5px solid #094067;
        background-color: white;
    }
`;
