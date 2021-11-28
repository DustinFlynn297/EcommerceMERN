import React from 'react'
import styled from 'styled-components'
import { ArrowRightOutlinedIcon, ArrowLeftOutlinedIcon } from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const Arrow = styled.div` 
    width: 50px;
    height: 50px;
    background-color: blue;
`

const Scroll = () => {
    return (
        <Container>
            <Arrow>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Arrow>
                <ArrowRightOutlinedIcon />
            </Arrow>
            
        </Container>
    )
}

export default Scroll
