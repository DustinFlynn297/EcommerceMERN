import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';
import { Mobile } from '../../responsive';

const Container = styled.div`
    height: 65px;
    display: flex;
    ${Mobile({height: "50px"})}
    
`;
const Wrapper = styled.div`
    display:flex;
    padding: 12px 22px;
    align-items: center;
    justify-content: space-between;
    ${Mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 15px;
    cursor: pointer;
    ${Mobile({display: "none"})}
`;
const SearchContainer = styled.div`
    border: 0.6px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`
const Input = styled.input`
    border: none;
    ${Mobile({width: "50px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${Mobile({flex: 2, justifyContent: "center"})}
`;
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${Mobile({fontSize: "14px"})}
`
const MenuOptions = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-left: 24px;
    ${Mobile({fontSize: "12px", marginLeft:"10px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <SearchIcon style={{color:"gray", fontsize:17}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <SportsVolleyballOutlinedIcon fontSize="large"/>
                    <Logo>Everything Volleyball</Logo>
                </Center>
                <Right>
                    <MenuOptions>Register</MenuOptions>
                    <MenuOptions>Login</MenuOptions>
                    <MenuOptions>
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuOptions>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
