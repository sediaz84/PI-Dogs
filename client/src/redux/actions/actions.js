import axios from 'axios';
export const GET_BREEDS = 'GET_BREEDS';
export const GET_SEARCH = 'GET_SEARCH';
export const DETAIL_BREEDS = 'DETAIL_BREEDS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_BREED = 'FILTER_BREED';
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT';
export const ORDER_BY = 'ORDER_BY';
export const ADD_BREED = 'ADD_BREED';
export const FAIL = 'FAIL';
export const LOADING = 'LOADING';
export const CLEAN = 'CLEAN';

export const getBreeds = () => async dispatch =>{
    await axios.get('http://localhost:3001/dogs')
      .then((response) =>{
        dispatch({
            type: GET_BREEDS,
            payload: response.data
        })
    })
    .catch((error) => { console.log(error)})
}

export const getBreedsName = (name) => async dispatch =>{
    try{
    await axios.get('http://localhost:3001/dogs?name='+ name)
    .then((response) => {
        dispatch({
            type: GET_SEARCH,
            payload: response.data
        })
    })
 } catch (error) { 
    return alert("Raza no encontrada")
 }
}

export const getBreedsId = (id) => async dispatch =>{
    try {
        // dispatch({
        //     type: LOADING
        // })
    await axios.get(`http://localhost:3001/dogs/${id}`)
    .then((response) => {
        dispatch({
            type: DETAIL_BREEDS,
            payload: response.data
        })
    })    
    } catch (error) { console.log(error)}
}

export const createBreed = (payload) => async dispatch =>{

    try{
    await axios.post('http://localhost:3001/dogs', payload)
    .then(response =>{
        dispatch({
            type: ADD_BREED,
            payload: response.data
        })
    })
} catch (error) {
          return (error)}
}

export const getTemperaments = () => async dispatch =>{
    try{
        await axios.get('http://localhost:3001/temperaments')
        .then((response) => {
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: response.data
            })            
        })
    } catch (error){
        return (error)
    }
}

export function filterBreed(payload){
    return{
        type: FILTER_BREED,
        payload
    }
}

export function filterTemperament(payload){
    return{
        type: FILTER_TEMPERAMENT,
        payload
    }
}

export function orderBy(payload) {
    return{
        type: ORDER_BY,
        payload
    }
}

export function clean() {
    return{
        type: CLEAN,
        
    }
}






