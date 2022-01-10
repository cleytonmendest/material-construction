import './style.scss'
import Slider from 'react-slick'
import Product from './ProductSlider'

const SliderProdutos = () =>{
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        initialSlide: 2,
        lazyLoad: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3

              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            }
          ]
    }


    return(
        <div className='product-slider'>
            <h2 className='product-slider__title'>Alguns de nossos produtos</h2>
            <Slider {...settings}>
                {Product.map((item, key) => (
                    <div key={key} className='product-item'>
                        <img src={item.src} alt={`imagem ${key}`} className='product-item__img' />
                        <p className='product-item__name'>{item.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderProdutos