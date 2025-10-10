import React from 'react';
import Style from '@/styles/Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
export default function Navbar() {
    const [menuMovil, setMenuMovil] = useState(false);


    const cambioMenuMovil =() => {
        setMenuMovil(!menuMovil);
    }
    return (
        <div className={Style.NavBar}>
            <p>ICONO</p>

            <a onClick={() => cambioMenuMovil()} className={Style.IconMenuMovil}>
                {menuMovil ? (
                    <FontAwesomeIcon icon={faTimes} size="2x" />

                ) : (
                    <FontAwesomeIcon icon={faBars} size="2x" />

                )}

            </a>




            <div className={menuMovil ?  Style.NavBar_items_Open :  Style.NavBar_items}>
                <a>Inicio</a>
                <a>Testimonios</a>
                <a>Recursos</a>
                <a>Sobre Nosotros</a>
                <a>Cerrar Sesión</a>
            </div>
        </div>
    )
}

