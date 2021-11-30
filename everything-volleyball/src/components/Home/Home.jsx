import React from 'react'
import Broadcast from '../Broadcast/Broadcast'
import Bulletin from '../Bulletin/Bulletin'
import Department from '../Department/Department'
import Merchandise from '../Merchandise/Merchandise'
import Navbar from '../Navbar/Navbar'
import Scroll from '../Scroll/Scroll'




const Home = () => {
    return (
        <div>
            <Broadcast />
            <Navbar />
            <Scroll />
            <Department />
            <Merchandise />
            <Bulletin />
        </div>
    )
}

export default Home
