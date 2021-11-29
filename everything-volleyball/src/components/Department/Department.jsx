import styled from 'styled-components'
import { Categories } from "../../data"
import DepartmentItem from "../DepartmentItem/DepartmentItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Department = () => {
    return (
        <Container>
            {Categories.map(item => (
                <DepartmentItem item={item}/>
            ))}
        </Container>
    )
}

export default Department
