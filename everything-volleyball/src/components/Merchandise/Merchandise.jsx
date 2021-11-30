import styled from 'styled-components'
import { BestSellers } from '../../data'
import MerchandiseItems from '../MerchandiseItems/MerchandiseItems'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`


const Merchandise = () => {
    return (
        <Container>
            {BestSellers.map((item) => (
                <MerchandiseItems item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Merchandise
