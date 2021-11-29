import React from 'react'
import Broadcast from '../Broadcast/Broadcast'
import Department from '../Department/Department'
import Navbar from '../Navbar/Navbar'
import Scroll from '../Scroll/Scroll'




const Home = () => {
    return (
        <div>
            <Broadcast />
            <Navbar />
            <Scroll />
            <Department />
        </div>
    )
}

export default Home
