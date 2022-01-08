import './style.scss'
import Map from '../../images/maps.jpg'

const Adress = () =>{
    return(
        <div className='adress'>
            <img className='adress__img' src={Map} alt="Map" />
            <a className='adress__button' href="#">
                Encontre-nos!
            </a>
        </div>
    )
}

export default Adress