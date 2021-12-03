import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile } from '../../responsive'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 40vh;
    position: relative;
`
const Image = styled.img`
    width: 80%;
    height: 80%;
    object-fit: cover;
    ${Mobile({height: "25vh"})}

`
const Info = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #0a0a08;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #050202;
    color: #f1ededbb;
    cursor: pointer;
    font-weight: 700;
`



const DepartmentItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
            </Link>
        </Container>
    )
}

export default DepartmentItem
