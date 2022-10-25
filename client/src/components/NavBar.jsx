import { Link } from "react-router-dom";
import SearchName from "./SearchName";
import FilterTemperament from "./FilterTemperament";
import Orders from './Orders';
import FilterBreeds from './FilterBreeds';
import style from '../css/navBar.module.scss';

export default function Nav({paginate}){
    return (
        <div className={style.navBar}>

            <button onClick={() => window.location.reload()} className={style.button}>Home</button>
            
            <SearchName 
            paginate={paginate} />

            <Orders 
            paginate={paginate} />

            <FilterBreeds 
            paginate={paginate} />

            <FilterTemperament
            paginate={paginate}
             />

            <Link to="/newBreed">
                <button className={style.button}>Add New Breed</button>
            </Link>
        </div>
    )
}