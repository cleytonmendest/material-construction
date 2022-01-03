import Slider from 'react-slick'
import ImageBanner from './ImagesBanner'
import './style.scss'

const Banner = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        initialSlide: 2,
        lazyLoad: true,
    }
    console.log(ImageBanner)
    return (
        <div className='banner'>
            <Slider {...settings}>
                {ImageBanner.map((item, key) => (
                    <div key={key}>
                        <img src={item.src} alt={`imagem ${key}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default Banner