import styled from 'styled-components'

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

`
const Info = styled.div`
    opacity: 0;
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
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default DepartmentItem
