import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

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
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const Scroller = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;

`;

const Image = styled.img`
    height: 80%;
`;


const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
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
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
                <Scroller>
                    <ImageContainer>
                        <Image src="https://images.allvolleyball.com/images/large/Custom_Fuze_AVBSITE_ProductTemplate_MSL_Tribe-2.jpg"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Winter Blowout Sale!</Title>
                        <Description>Don't Miss the Newest Products!</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    <ImageContainer></ImageContainer>
                </Scroller>
                <Scroller>
                    <ImageContainer>
                        <Image src="https://images.allvolleyball.com/images/large/Custom_Fuze_AVBSITE_ProductTemplate_MSL_Tribe-2.jpg"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Winter Blowout Sale!</Title>
                        <Description>Don't Miss the Newest Products!</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    <ImageContainer></ImageContainer>
                </Scroller>
                <Scroller>
                    <ImageContainer>
                        <Image src="https://images.allvolleyball.com/images/large/Custom_Fuze_AVBSITE_ProductTemplate_MSL_Tribe-2.jpg"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Winter Blowout Sale!</Title>
                        <Description>Don't Miss the Newest Products!</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    <ImageContainer></ImageContainer>
                </Scroller>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlinedIcon />
            </Arrow>
            
        </Container>
    )
}

export default Scroll
