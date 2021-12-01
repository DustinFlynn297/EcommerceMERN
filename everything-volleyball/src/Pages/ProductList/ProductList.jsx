import React from 'react'
import styled from 'styled-components'
import Broadcast from '../../components/Broadcast/Broadcast'
import Bulletin from '../../components/Bulletin/Bulletin'
import { Footer } from '../../components/Footer/Footer'
import Merchandise from '../../components/Merchandise/Merchandise'
import Navbar from '../../components/Navbar/Navbar'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 18px;
`
const SelectFilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 18px;
`
const FilterText = styled.span` 
    font-size: 20px;
    font-weight: 600;
    margin-right: 18px;
`
const Select = styled.select` 
    padding: 10px;
    margin-right: 18px;
`

const Option = styled.option`
    
`


const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Broadcast />
            <Title>Men's</Title>
            <SelectFilterContainer>
                <Filter>
                    <FilterText>Filter Merchandise:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Merchandise:</FilterText>
                    <Select>
                        <Option selected>
                            Most Popular
                        </Option>
                        <Option>Price (ascending)</Option>
                        <Option>Price (descending)</Option>                        
                    </Select>
                </Filter>
                </SelectFilterContainer>
            <SelectFilterContainer></SelectFilterContainer>
            <Merchandise/>
            <Bulletin />
            <Footer />
        </Container>
    )
}

export default ProductList
