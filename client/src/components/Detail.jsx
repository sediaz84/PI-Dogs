import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBreedsId } from "../redux/actions/actions";
import working from "../img/Working modificado.png";
import style from '../css/breedDetail.module.scss';

export default function Detail(props){
    const dispatch = useDispatch();
    const breedId = useSelector((state) => state.breedsDetail)
    
    useEffect(()=> {
        dispatch(getBreedsId(props.match.params.id))
    }, [dispatch, props.match.params.id])
    console.log(breedId)
    return (
        <div className={style.contDetail}>   
            <div className={style.nav}>
                <Link to="/home">
                    <button className={style.buttonLink}>Home</button>
                </Link>
                <Link to="/newBreed">
                    <button className={style.buttonLink}>Create Breed</button>
                </Link>
            </div>         
                {breedId.length === 0 ? (
                <div className={style.loading}><img src={working} alt='loading' /> </div>) : 
                (                     
                <div className={style.detail}>
                {breedId.map(breedId => {  
                    return( 
                    <div key={breedId.id}>                     
                        <img src={breedId.image} alt='img' className={style.img}/>   
                        <h3>Name: {breedId.name}</h3>    
                        <div><h4>Weight:</h4> <p>Min: {breedId.weightMin}/kg - Max: {breedId.weightMax}/kg</p></div>
                        <div><h4>Height:</h4> <p>Min: {breedId.heightMin}/cm - Max: {breedId.heightMax}/cm</p></div>
                        <div><h4>Life-Span:</h4><p>Min: {breedId.life_span_min} - Max: {breedId.life_span_max}</p></div>
                        <div><h4>Temperaments:</h4><p>{breedId.temperament}</p></div>
                    </div>
                     )})}
             </div> 
              
            
    )} 
        </div>
        )
}