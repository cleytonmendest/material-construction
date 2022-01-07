import React from "react";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Map from '../../images/maps.jpg'
import SliderProdutos from "../../components/SliderProdutos";
import './styles.scss'

const Home = () =>{
    return(
        <>
        <header className="home__menu-area">
            <Menu/>
        </header>
        <main>
            <section className="home__banner-section">
                <Banner/>
            </section>
            <section className="home__product-section">
                <SliderProdutos/>
            </section>
            <section className="home__fornecedores">
                
            </section>
            <section className="home__adress-section">
                <img src={Map} alt="Map" />
            </section>
        </main>
        <footer className="home__footer">
            <h1>Oi</h1>
        </footer>
        </>
    )
}
export default Home