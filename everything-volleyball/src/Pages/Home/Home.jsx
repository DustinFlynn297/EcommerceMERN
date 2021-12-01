import React from 'react'
import Broadcast from '../../components/Broadcast/Broadcast'
import Bulletin from '../../components/Bulletin/Bulletin'
import Department from '../../components/Department/Department'
import Footer from '../../components/Footer/Footer'
import Merchandise from '../../components/Merchandise/Merchandise'
import Navbar from '../../components/Navbar/Navbar'
import Scroll from '../../components/Scroll/Scroll'




const Home = () => {
    return (
        <div>
            <Broadcast />
            <Navbar />
            <Scroll />
            <Department />
            <Merchandise />
            <Bulletin />
            <Footer />
        </div>
    )
}

export default Home
