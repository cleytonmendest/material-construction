import React from "react";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import SliderProdutos from "../../components/SliderProdutos";
import Fornecedores from "../../components/Fornecedores";
import Adress from "../../components/Adress";
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
                <Fornecedores/>
            </section>
            <section className="home__adress-section">
                <Adress/>
            </section>
        </main>
        <footer className="home__footer">
            <h1>Oi</h1>
        </footer>
        </>
    )
}
export default Home