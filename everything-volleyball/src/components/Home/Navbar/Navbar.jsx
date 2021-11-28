import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 65px;
`;
const Wrapper = styled.div`
    display:flex;
    padding: 12px 22px;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 15px;
    cursor: pointer;
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
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`
const MenuOptions = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-left: 24px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color:"gray", fontsize:17}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Everything Volleyball</Logo>
                </Center>
                <Right>
                    <MenuOptions>Register</MenuOptions>
                    <MenuOptions>Login</MenuOptions>
                    <MenuOptions>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuOptions>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
