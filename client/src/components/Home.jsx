import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBreeds, clean } from "../redux/actions/actions";
import HomeCard from "./HomeCard.jsx";
import NavBar from "./NavBar.jsx";
import Paginado from "./Paginado.jsx";
import working from "../img/Working modificado.png";
import style from '../css/home.module.scss';


export default function Breeds(){
    let breeds = useSelector((state)=> state.breeds);
    let dispatch = useDispatch();
    console.log(breeds)

    useEffect(() => {
        dispatch(getBreeds());
        dispatch(clean())
        }, [dispatch])

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);
  

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = breeds.slice(indexOfFirstPost, indexOfLastPost);
  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return(
        <div>
            
            
            <div>
                <NavBar 
                paginate={paginate}/>
            </div>
            {breeds.length === 0 ? (
                <div className={style.loading}><img src={working} alt='loading' /> </div>) : 
                ( 
            <div className={style.paginado}>
            <Paginado
            postPerPage={postPerPage}
            totalPost={breeds.length}
            paginate={paginate}
            currentPage={currentPage}
          />  
            </div>
          )}

            {breeds.length === 0 ? (
                <div className={style.loading}><img src={working} alt='loading' /> </div>) : 
                ( 

           <div className={style.contHome}>
             {
                currentPosts.map(e=> (
                    <HomeCard
                    key={e.id}
                    id={e.id}
                    img={e.image}
                    name={e.name}
                    weightMin={e.weightMin}
                    weightMax={e.weightMax}                    
                    temperament={e.temperament}
                    />
                ))
            
            }
            </div> 
    )}
    
        </div>
    )
}