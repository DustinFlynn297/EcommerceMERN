import styled from 'styled-components'
import Broadcast from '../../components/Broadcast/Broadcast'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    align-items: center;
    justify-content: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const TopText = styled.span`

`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 2px 2px;
`
const PriceDetails = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 250;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 10px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 12px;
    padding: 18px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItems = styled.div`
    margin: 28px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const ItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 550;
`


const ShoppingCart = () => {
    return (
        <Container>
            <Navbar/>
            <Broadcast/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart (2)</TopText>
                        <TopText>Saved Items (0)</TopText>
                    </TopTexts>
                    <TopButton type="text">Checkout</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.imgur.com/VtXQHvP.jpg"/>
                                <Details><b>Product:</b> Baden Volleyball</Details>
                                <ProductId><b>ID:</b> 981531654</ProductId>
                                <ProductColor color="red"/>
                                <ProductColor color="blue"/>
                                <ProductColor color="white"/>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon />
                                    <ProductPrice>$64.95</ProductPrice>
                                </ProductAmountContainer>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.imgur.com/Dd2em3c.jpg"/>
                                <Details><b>Product:</b> Adidas</Details>
                                <ProductId><b>ID:</b> 981531643</ProductId>
                                <ProductColor color="gray"/>
                                <ProductColor color="yellow"/>
                                <ProductColor color="white"/>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <RemoveIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon />
                                    <ProductPrice>$104.99</ProductPrice>
                                </ProductAmountContainer>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItems>
                            <ItemText>Subtotal</ItemText>
                            <SummaryItemPrice>$169.94</SummaryItemPrice>
                        </SummaryItems>
                        <SummaryItems>
                            <ItemText>Estimated Shipping</ItemText>
                            <SummaryItemPrice>$15</SummaryItemPrice>
                        </SummaryItems>
                        <SummaryItems>
                            <ItemText>Shipping Discount</ItemText>
                            <SummaryItemPrice>$ -15</SummaryItemPrice>
                        </SummaryItems>
                        <SummaryItems type="total">
                            <ItemText >Total</ItemText>
                            <SummaryItemPrice>$ 169.94</SummaryItemPrice>
                        </SummaryItems>
                        <Button>Checkout</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default ShoppingCart
