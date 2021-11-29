import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 34px;
    background-color: #3c4fa1;
    color: #ffffffea;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
`

const Broadcast = () => {
    return (
        <Container>
            Free Shipping on Orders Over $49!
        </Container>
    )
}

export default Broadcast
