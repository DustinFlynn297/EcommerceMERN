import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://i.imgur.com/GYVFlRL.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 18px;
    background-color: rgba(255,255,255,0.9);
`
const Title = styled.h1`
    font-size: 36px;
    font-weight: 350;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 8px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 8px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 14px;
    font-weight: 540;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>Login</Button>
                    <Link>Forget your username?</Link>
                    <Link>Forget your password?</Link>
                    <Link>Register A New Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
