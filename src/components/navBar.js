
const Header = ()=>{
    return(
        <>
            <header className="header">
                <input type="checkbox" name="burger-btn" id="burger" />
                <div className="header__logo-burger">
                    <a className="header__logo" href=""> <img alt="OWSLA Logo" /></a>
                    <label htmlFor="burger" className="burger-btn">
                        <div className="burger"></div>
                    </label>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link--black" href="">all</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link--black" href="">Tops</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link--black" href="">Bottoms</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link--black" href="">Jackets</a>
                        </li>
                        <li className="nav__item nav__item--active">
                            <a className="nav__link--black" href="">Accessories</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link--black" href="">Artists Apparel</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link--black" href="">Music</a>
                        </li>
                    </ul>
                </nav>

            </header>

        </>
    )
}

export default Header