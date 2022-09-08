import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterTemperament, getTemperaments } from "../redux/actions/actions";


export default function FilterTemp(){
    const temperament = useSelector((state)=> state.temperaments)
    const dispatch = useDispatch();
    console.log(temperament)
    
    
    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])
    
    function onFilterTemperament(e){
        e.preventDefault()
        dispatch(filterTemperament(e.target.value))
    }

    return(
        <div>
            <select onChange={onFilterTemperament}>
                <option value='All Temperaments' key='All Temperaments'>All Temperaments</option>
                {temperament.map((el)=> (
                    <option value={el.name} key={el.id}>{el.name}</option>
                ))}
            </select>
        </div>
    )
}