import './style.scss'
import Slider from 'react-slick'

const Informations = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false
    }

    return (
        <div className='information'>
            <Slider {...settings}>
                <div>
                    Entrega rápida para todo o Rio de Janeiro
                </div>
                <div>
                    Dúvidas? Ligue (21)9999-9999 / (21)9999-9999
                </div>
                <div>
                    Faça o seu pedido por WhatsApp! 
                </div>
                <div>
                    Mande mensagem para (21)99999-9999
                </div>
            </Slider>

        </div>
    )
}
export default Informations