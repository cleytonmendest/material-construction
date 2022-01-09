import './style.scss'
const Menu = () => {
    return (
        <>
            <div className="menu">
                <h1 className='menu__logo'>
                    Logo
                </h1>
                <div className='menu__list'>
                    <ul className='menu-list'>
                        <li className='menu-list__item'><a href="#">Sobre</a></li>
                        <li className='menu-list__item'><a href="#">Produtos</a></li>
                        <li className='menu-list__item'><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu