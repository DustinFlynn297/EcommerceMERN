import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'
import { Mobile } from '../../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 75px;
    margin-bottom: 22px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${Mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${Mobile({width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #3c4fa1;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Receive updates on the latest releases and biggest sales.</Description>
            <InputContainer>
                <Input placeholder="Email"/>
                <Button>
                    <SendIcon/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
