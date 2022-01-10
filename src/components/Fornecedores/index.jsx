import './style.scss'
import Slider from 'react-slick'
import Forn from './FornecedoresList'

const Fornecedores = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        initialSlide: 2,
        pauseOnHover: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5

                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3

                }
            }
        ]
    }
    const settingsRev = {
        draggable: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        initialSlide: 2,
        pauseOnHover: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    }
    return (
        <div className='slider-fornecedores'>
            <div className='fornecedores-textos'>
                <h2>Trabalhamos com diversas marcas</h2>
                <p>Para melhor te atender!</p>
            </div>
            <Slider {...settings}>
                {Forn.map((item, key) => (
                    <div className='fornecedores__img-area' key={key}>
                        <img className='fornecedores__img' src={item.src} alt={`Imagem ${key}`} />
                    </div>
                ))}
            </Slider>
            <Slider {...settingsRev}>
                {Forn.map((item, key) => (
                    <div className='fornecedores__img-area' key={key}>
                        <img className='fornecedores__img' src={item.src} alt={`Imagem ${key}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Fornecedores