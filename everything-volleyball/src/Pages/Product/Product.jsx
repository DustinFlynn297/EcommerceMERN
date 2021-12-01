import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react'
import styled from 'styled-components'
import Broadcast from '../../components/Broadcast/Broadcast'
import Bulletin from '../../components/Bulletin/Bulletin'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 60%;
    
`

const InformationContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 700;
`

const Description = styled.p`
    margin: 18px 0px;
    font-size: 20px;
`

const Price = styled.span`
    font-weight: 600;
    font-size: 35px;
`
const FilterContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
`
const FilterName = styled.span`
    font-size: 21px;
    font-weight: 200;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
    border: black;
`    
const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
`

const Option = styled.option`

`
const AdditionContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const NumberContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 28px;
    height: 28px;
    border-radius: 12px;
    border: 3px solid lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 4px;
`
const Button = styled.button`
    padding: 16px;
    border: 3px solid lightblue;
    background-color: white;
    cursor: pointer;
    font-weight: 450;

    &:hover {
        background-color: #d3ccccad;
    }
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Broadcast />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.imgur.com/VtXQHvP.jpg" />
                </ImageContainer>
                <InformationContainer>
                    <Title>Baden Perfection VX5E Volleyball</Title>
                    <Description>Baden's top-of-the-line leather game ball. Top-grade, full-grain, hand-picked leather for a softer, more durable cover. Innovative tanning process for enhanced durability.

                    </Description>
                    <Price>$64.95</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterName>Color</FilterName>
                            <FilterColor color="Green" />
                            <FilterColor color="Red"/>
                            <FilterColor color="Black"/>
                            <FilterColor color="Grey"/>
                        </Filter>
                        <Select>
                            <Option disabled selected>Qty</Option>
                            <Option>1</Option>
                            <Option>2</Option>
                            <Option>3</Option>
                            <Option>4</Option>
                            <Option>5</Option>
                            <Option>6</Option>
                            <Option>7</Option>
                            <Option>8</Option>
                            <Option>9</Option>
                        </Select>
                    </FilterContainer>
                    <AdditionContainer>
                        <NumberContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </NumberContainer>
                        <Button>Add To Cart</Button>
                    </AdditionContainer>
                </InformationContainer>
            </Wrapper>
            <Bulletin />
            <Footer />
        </Container>
    )
}

export default Product
