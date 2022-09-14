import React from "react";
import { Link } from "react-router-dom";
import imgDogs from "../img/DosPerrosTontosModificado.png";
import title from "../img/WelcometheDogs... modif.png";
import enter from "../img/Enter modificado.png"
import style from "../css/landing.module.scss";

export default function LandingPage() {

    return (
        <div className={style.fondo}>

            <img src={imgDogs} className={style.imgDogsLanding} alt='dogs' />

            <div className={style.contTitle}>
                <img src={title} className={style.titleLanding} alt='dogs' />
                <Link to={'/home'}>

                    <img src={enter} className={style.enter} alt='dogs' />

                </Link>
            </div>

        </div>
    )
}