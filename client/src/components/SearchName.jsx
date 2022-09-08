import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBreedsName } from "../redux/actions/actions";

export default function SearchBreed(){
   const [search, setSearch] = useState('')
   let dispatch = useDispatch()

   function onSubmit(e){
    e.preventDefault();
    if(!search) return alert('Breed is require')
    dispatch(getBreedsName(search))
    setSearch('')
   }

   function onInputChange(e){
    e.preventDefault()
    setSearch(e.target.value)
   }
    

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder="Search breed" onChange={onInputChange} value={search} />
                <input type='submit' value='Buscar' />
            </form>
        </div>



    )
}