import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navBar.module.css";
const NavBar = () => {
  return (
    <header className="">
      <nav
        className={`navbar ${styles.navBar}  navbar-expand-lg navbar-ligth bg-primary `}
      >
        <div className={`col-1  ${styles.logo}`}>
          <img src={"/img/Logo Agência de Viagens.png"} alt="Logo da empresa" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbarNav ,.navbarNav2"
          aria-controls="#navbarNav "
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className=" justify-content-center collapse navbar-collapse navbarNav"
          id="navbarNav"
        >
          <ul className="col-md-9 justify-content-center text-center navbar-nav">
            <li className="nav-item active">
              <Link href="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link href={"/destinos"} className="nav-link">
                Destino
              </Link>
            </li>
            <li className="nav-item active">
              <Link href={"/promocoes"} className="nav-link">
                Promoções
              </Link>
            </li>
            <li className="nav-item active">
              <Link href={"/sobre"} className="nav-link">
                Sobre Nós
              </Link>
            </li>
            <li className="nav-item active">
              <Link href={"/gerenciamento"} className="nav-link">
                Gerenciamento
              </Link>
            </li>
          </ul>
          <div className="col-md-2 ">
            <div className={`row ${styles.btnHeader} `}>
              <Link href={"/clientes"} className="btn  btn-primary active ">
                Cadastre-se
              </Link>
              <Link href={"/login"} className="btn  btn-primary active ">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
