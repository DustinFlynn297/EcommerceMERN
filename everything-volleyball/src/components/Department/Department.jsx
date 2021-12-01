import styled from 'styled-components'
import { Categories } from "../../data"
import { Mobile } from '../../responsive'
import DepartmentItem from "../DepartmentItem/DepartmentItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${Mobile({padding: "0px", flexDirection: "column"})}
`

const Department = () => {
    return (
        <Container>
            {Categories.map(item => (
                <DepartmentItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Department
