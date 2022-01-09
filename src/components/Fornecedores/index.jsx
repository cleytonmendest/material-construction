import './style.scss'
import Slider from 'react-slick'
import Forn from './FornecedoresList'

const Fornecedores = () =>{
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
        pauseOnHover:true,
        draggable:false
    }
    const settingsRev = {
        draggable:false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        initialSlide: 2,
        pauseOnHover:true,
        rtl: true
    }
    return(
        <div className='slider-fornecedores'>
            <Slider {...settings}>
                {Forn.map((item, key)=>(
                    <div key={key}>
                        <img src={item.src} alt={`Imagem ${key}`} />
                    </div>
                ))}
            </Slider>
            <Slider {...settingsRev}>
                {Forn.map((item, key)=>(
                    <div key={key}>
                        <img src={item.src} alt={`Imagem ${key}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Fornecedores