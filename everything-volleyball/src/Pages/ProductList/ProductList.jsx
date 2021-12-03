import React, { useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Broadcast from '../../components/Broadcast/Broadcast'
import Bulletin from '../../components/Bulletin/Bulletin'
import Footer from '../../components/Footer/Footer'
import Merchandise from '../../components/Merchandise/Merchandise'
import Navbar from '../../components/Navbar/Navbar'
import { Mobile } from '../../responsive'

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
    ${Mobile({width: "0px 18px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span` 
    font-size: 20px;
    font-weight: 600;
    margin-right: 18px;
    ${Mobile({marginRight: "0px"})}
`
const Select = styled.select` 
    padding: 10px;
    margin-right: 18px;
    ${Mobile({margin: "10px 0px"})}
`

const Option = styled.option`

`


const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value
        })
    };
    return (
        <Container>
            <Navbar />
            <Broadcast />
            <Title>{category}</Title>
            <SelectFilterContainer>
                <Filter>
                    <FilterText>Filter Merchandise:</FilterText>
                    <Select name="color"onChange={handleFilters}>
                        <Option disabled >
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Red</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >
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
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="most popular">
                            Most Popular
                        </Option>
                        <Option value="asc">Price (ascending)</Option>
                        <Option value="desc">Price (descending)</Option>                        
                    </Select>
                </Filter>
                </SelectFilterContainer>
            <SelectFilterContainer></SelectFilterContainer>
            <Merchandise category={category} filters={filters} sort={sort}/>
            <Bulletin />
            <Footer />
        </Container>
    )
}

export default ProductList
