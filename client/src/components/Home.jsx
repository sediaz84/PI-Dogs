import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getBreeds } from "../redux/actions/actions";
import HomeCard from "./HomeCard.jsx";
import style from '../css/home.module.scss';

export default function Breeds(){
    let breeds = useSelector((state)=> state.breeds);
    let dispatch = useDispatch();
    console.log(breeds)

    useEffect(() => {
        dispatch(getBreeds());
    }, [dispatch])

    return(
        <div>
           <div className={style.contHome}>
            {
                breeds.map(e=> (
                    <HomeCard
                    key={e.id}
                    img={e.image}
                    name={e.name}
                    weight={e.weight}                    
                    temperament={e.temperament}
                    />
                ))
            
            }

           </div> 
        </div>
    )
}