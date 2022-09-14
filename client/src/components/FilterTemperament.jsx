import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterTemperament, getTemperaments } from "../redux/actions/actions";
import style from "../css/filterTemp.module.scss";


export default function FilterTemp({paginate}){
    const temperament = useSelector((state)=> state.temperaments)
    const dispatch = useDispatch();
    
    const temperamentsOrder = temperament.sort((a, b) => { //se ordena alfabeticamente para que salga bien en el select
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1;}
        return 0;
      })
   
    
    useEffect(()=>{
        dispatch(getTemperaments());
        }, [dispatch])
    
    function onFilterTemperament(e){
        e.preventDefault()
        dispatch(filterTemperament(e.target.value))
        paginate(1)
    }

    return(
        <div>
            <select onChange={onFilterTemperament} className={style.select}>
                <option value='All Temperaments' key='All Temperaments'>All Temperaments</option>
                {temperamentsOrder.map((el, index)=> (
                    <option value={el.name} key={index}>{el.name}</option>
                ))}
            </select>
        </div>
    )
}