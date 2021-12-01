import styled from 'styled-components'
import { Mobile } from '../../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://i.imgur.com/NkAkpYW.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 18px;
    background-color: white;
    ${Mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 36px;
    font-weight: 350;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 15px 0;
    padding: 8px;
`
const Agree = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email Address" />
                    <Input placeholder="Street Address" />
                    <Input placeholder="City" />
                    <Input placeholder="State" />
                    <Input placeholder="Zip Code" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agree>By clicking create account I am agreeing to the Privacy Policy.</Agree>
                    <br/>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
