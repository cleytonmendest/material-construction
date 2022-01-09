import './style.scss'
import Map from '../../images/maps.jpg'

const Adress = () =>{
    return(
        <div className='adress'>
            <h3 className='adress__title'>Não sabe onde nos encontrar?</h3>
            <img className='adress__img' src={Map} alt="Map" />
            <a className='adress__button' href="https://www.google.com.br/maps/place/Empenho+Ferragens+Materiais+de+Constru%C3%A7%C3%A3o/@-22.9875278,-43.4352358,17z/data=!3m1!4b1!4m5!3m4!1s0x9bdc599da26a55:0x1e443e92a3a952f9!8m2!3d-22.9875328!4d-43.4330471" target="_blank" rel="noreferrer">
                Encontre-nos!
            </a>
        </div>
    )
}

export default Adress