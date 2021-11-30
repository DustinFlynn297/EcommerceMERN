import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Description = styled.p`
    margin: 22px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 30%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 32px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 11px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 8px;
    display: flex;
    align-items: center;
`
const Payments = styled.img`
    width: 25%;
`

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Everything Volleyball</Logo>
                <Description>Our passion for volleyball has driven us to create a place where all volleyball athletes can find the apparel and equipment they need to bring their A-game. A portion of our proceeds goes to helping fund high schools across the U.S. that currently don't have the funding for a volleyball team.                    
                </Description>
                <SocialContainer>
                    <SocialIcon color="#3b5999df"><FacebookIcon/></SocialIcon>
                    <SocialIcon color="#E4405F"><InstagramIcon/></SocialIcon>
                    <SocialIcon color="#55ACEE"><TwitterIcon/></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Helpful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's</ListItem>
                    <ListItem>Women's</ListItem>
                    <ListItem>Volleyballs</ListItem>
                    <ListItem>Equipment</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Forum</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MapOutlinedIcon style={{marginRight:"11px"}}/>6200 Pershall Rd, Hazelwood, MO 63042
                </ContactItem>
                <ContactItem>
                    <PhoneInTalkOutlinedIcon style={{marginRight:"11px"}}/>+1 314 722 6321
                </ContactItem>
                <ContactItem>
                    <EmailOutlinedIcon style={{marginRight:"11px"}}/>contact@everythingvolleyball.com
                </ContactItem>
                <Payments src="https://i.imgur.com/6gKR6Zi.jpg" />
            </Right>
        </Container>
    )
}
