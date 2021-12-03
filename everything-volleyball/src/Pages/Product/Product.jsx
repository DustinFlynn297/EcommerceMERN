import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import styled from 'styled-components'
import Broadcast from '../../components/Broadcast/Broadcast'
import Bulletin from '../../components/Bulletin/Bulletin'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Mobile } from '../../responsive';
import { publicRequest } from "../../requestMethods"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${Mobile({padding: "10px", flexDirection: "column"})}
`
const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 60%;
    ${Mobile({width: "90%"})}
    
`

const InformationContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${Mobile({padding: "10px"})}
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
    ${Mobile({width: "100%", padding: "8px 0px"})}
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
    ${Mobile({width: "100%"})}
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
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const[product,setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);
      

    return (
        <Container>
            <Navbar />
            <Broadcast />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InformationContainer>
                    <Title>{product.title}</Title>
                    <Description>
                        {product.description}
                    </Description>
                    <Price>#{product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterName>Color</FilterName>
                            {product.color.map((c) => (
                                <FilterColor color={c} key={c} />
                            ))}
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
