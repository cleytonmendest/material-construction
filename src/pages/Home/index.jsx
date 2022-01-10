import React from "react";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import SliderProdutos from "../../components/SliderProdutos";
import Fornecedores from "../../components/Fornecedores";
import Adress from "../../components/Adress";
import PostInstagram from "../../components/instagram";
import Footer from "../../components/Footer";
import Informations from "../../components/Informations";
import WhatsappButton from "../../components/WhatsappButton";
import './styles.scss'

const Home = () => {
    return (
        <>
            <section className="home__informations">
                <Informations/>
            </section>
            <header className="home__menu-area">
                <Menu />
            </header>
            <main>
                <section className="home__banner-section">
                    <Banner />
                </section>
                <section className="home__product-section">
                    <SliderProdutos />
                </section>
                <section className="home__fornecedores">
                    <Fornecedores />
                </section>
                <section className="home__adress-section">
                    <Adress />
                </section>
                <section className="home__instagram-area">
                    <PostInstagram />
                </section>
                <aside>
                    <WhatsappButton/>
                </aside>
            </main>
            <footer className="home__footer">
                <Footer />
            </footer>
        </>
    )
}
export default Home