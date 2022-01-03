import React from "react";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Map from '../../images/maps.jpg'
import PostInstagram from "../../components/instagram";
import './styles.scss'

const Home = () =>{
    return(
        <>
        <header className="menu-area">
            <Menu/>
        </header>
        <main>
            <section className="banner-section">
                <Banner/>
            </section>
            <section>
                <img src={Map} alt="Map" />
            </section>
        </main>
        <footer>
            <PostInstagram/>
        </footer>
        </>
    )
}
export default Home