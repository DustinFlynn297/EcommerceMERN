import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { ScrollItems } from '../../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div` 
    width: 55px;
    height: 55px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "11px"};
    right: ${props=> props.direction === "right" && "11px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.9;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translate(${props=> props.scrollIndex * -100}vw);
`
const Scroller = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const Image = styled.img`
    height: 80%;
`;


const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const InformationContainer = styled.div`
    flex: 1;
    padding: 50px 25px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 22px;
    background-color: transparent;
`;

const Scroll = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setScrollIndex(scrollIndex > 0 ? scrollIndex -1 : 2)
        } else {
            setScrollIndex(scrollIndex < 2 ? scrollIndex +1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper scrollIndex={scrollIndex}>
                {ScrollItems.map(item=>(
                    <Scroller bg={item.bg}>
                        <ImageContainer>
                            <Image src={item.img}/>
                        </ImageContainer>
                        <InformationContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>Shop Now</Button>
                        </InformationContainer>
                        <ImageContainer></ImageContainer>
                    </Scroller>
                ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
            
        </Container>
    )
}

export default Scroll
