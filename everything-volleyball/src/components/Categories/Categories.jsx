import styled from 'styled-components'
import { category } from "../../data"
import { Mobile } from '../../responsive'
import CategoryItem from "../CategoryItem/CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${Mobile({padding: "0px", flexDirection: "column"})}
`

const Categories = () => {
    console.log(category);
    return (
        
        <Container>
            {category.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
