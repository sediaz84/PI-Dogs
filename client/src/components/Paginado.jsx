import React from "react";
import style from "../css/paginado.module.scss";

export default function Pagination({postPerPage, totalPost, paginate, currentPage}) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pageNumbers.push(i);
    }


    

    return (
        <div>
               
            <ul>
                <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1 )} className={style.buttonNumber}>
                   Prev 
                </button> 
                {pageNumbers.map(number => (
                    <button key={number} onClick={()=> paginate(number)} className={style.buttonNumber}>
                         
                            {number}
                    </button>                    
                ))}
                <button
                onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)} className={style.buttonNumber}>
                    Next
                </button> 
            </ul>
                
        </div>
    )
}