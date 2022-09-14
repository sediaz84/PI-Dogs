import { Link } from "react-router-dom";
import style from '../css/homeCard.module.scss';



export default function BreedCard({id, img, name, weightMin, weightMax, temperament}){

    return(
        <div>
            <div className={style.homeCard}>
                <img src={img} alt="img" />
                <Link to={`/home/${id}`}>
                <h5>Name: {name}</h5>
                </Link>
                <p>Weight Min: {weightMin} Max: {weightMax}</p>
                <p>Temperament: {temperament}</p>
            </div>
        </div>
    )
}