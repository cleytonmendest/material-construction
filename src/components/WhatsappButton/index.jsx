import './style.scss'
import Whats from '../../images/WhatsApp_icon.png'

const WhatsappButton = () =>{
    return(
        <div className='whatsapp-area'>
            <a href="https://api.whatsapp.com/send?phone=5521999999999&text=Olá, gostaria de fazer um pedido!" target="_blank" rel="noreferrer">
                <img className='whatsapp__img' src={Whats} alt="WhatsApp" />
            </a>
        </div>
    )
}

export default WhatsappButton