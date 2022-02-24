import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://www.eatlogos.com/art_logos/png/art_eatlogos_design_for_pink.png" />
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
                
            </div>
        </header>
    )
}

export default Header
