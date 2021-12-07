import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Products/Products'
import Navbar from '../../components/Navbar/Navbar'
import Scroll from '../../components/Scroll/Scroll'




const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Scroll />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
