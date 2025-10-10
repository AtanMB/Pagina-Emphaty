import React, { useState } from "react";
import Link from "next/link";
import Style from "@/styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuMovil, setMenuMovil] = useState(false);

  const cambioMenuMovil = () => {
    setMenuMovil(!menuMovil);
  };

  return (
    <nav className={Style.navbar}>
      <div className={Style.logo}>
        <span>💚 Emphaty</span>
      </div>

      <div className={Style.menuIcon} onClick={cambioMenuMovil}>
        <FontAwesomeIcon icon={menuMovil ? faTimes : faBars} size="2x" />
      </div>

      <div
        className={`${Style.navLinks} ${
          menuMovil ? Style.navLinksMobile : ""
        }`}
      >
        <Link href="/">Inicio</Link>
        <Link href="/testimonios">Testimonios</Link>
        <Link href="/recursos">Recursos</Link>
        <Link href="/sobre-nosotros">Sobre Nosotros</Link>
      </div>
    </nav>
  );
}
