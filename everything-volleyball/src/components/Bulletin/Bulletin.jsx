import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'

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
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #d037e4;
`

const Bulletin = () => {
    return (
        <Container>
            <Title>Communications</Title>
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

export default Bulletin
