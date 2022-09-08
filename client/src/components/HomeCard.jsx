import style from '../css/homeCard.module.scss'



export default function BreedCard({id, img, name, weight, temperament}){

    return(
        <div>
            <div className={style.homeCard}>
                <img src={img} alt="img" />
                <p>Name: {name}</p>
                <p>Weight: {weight}</p>
                <p>Temperament: {temperament}</p>
            </div>
        </div>
    )
}