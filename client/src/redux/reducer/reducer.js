import { GET_BREEDS, GET_SEARCH, DETAIL_BREEDS, LOADING, CLEAN,
         FILTER_TEMPERAMENT, FILTER_BREED, GET_TEMPERAMENTS, ORDER_BY, ADD_BREED  } from "../actions/actions";
import { A_Z, Z_A, WEIGHT_MAX, WEIGHT_MIN  } from "../../constantes/order";         

const initialState = {
    breeds: [],
    breedsClean: [],
    breedsDetail: [],
    temperaments: [],
    empty: [],
    newBreed: {},
    error: "",
    loading: false,
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_BREEDS:
            return {
                ...state,
                breeds: action.payload,
                breedsClean: action.payload,
                error: "",
            }
        case GET_SEARCH:
            return {
                ...state,
                breeds: action.payload,
                //error:""
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case ORDER_BY:
            let orderAz = [...state.breeds]
            orderAz = orderAz.sort((a, b) => {
                switch(action.payload){
                    case A_Z:
                        if(a.name < b.name) {
                            return -1;
                        } else return 1
                    case Z_A:
                        if(a.name > b.name) {
                            return -1;
                        } else return 1
                    case WEIGHT_MAX:
                        if(a.weightMax > b.weightMax) {
                            return -1
                        } else return 1
                    case WEIGHT_MIN:
                        if(a.weightMin < b.weightMin) {
                            return -1
                        } else return 1
                    default: return 0;
                    }  
            })
            return {
                ...state,
                breeds: orderAz

            }        
        case FILTER_TEMPERAMENT:
            let allTemperaments = [...state.breedsClean]
            //if(action.payload === 'All Temperaments') return {...state, breeds: state.breeds}
            let aux2 = action.payload === 'All Temperaments' ? allTemperaments : allTemperaments.filter(el => el.temperament.includes(action.payload))
            console.log(aux2)                
            return {
                ...state,
                breeds: aux2
            }          
        case FILTER_BREED:
            let allBreeds = [...state.breedsClean]
            let aux;
            console.log(allBreeds)
            if(action.payload === 'All Breeds') return { ...state, breeds: allBreeds}
            if(action.payload === 'Breeds') {
                aux = allBreeds.filter(e=> Number(e.id))               
            } 
            if(action.payload === 'New Breeds') {
                aux = allBreeds.filter(e=> !Number(e.id))
            }
            if(action.payload === 'Weight -10') {
                aux = allBreeds.filter(e=> e.weightMin > 10)
            }

            console.log(aux)
            return{
                ...state,
                breeds: aux
            }
        case DETAIL_BREEDS:
            return{
                ...state,
                breedsDetail: action.payload
            } 
        case ADD_BREED:
            return{
                ...state,
                newBreed: action.payload

            }            
        // case FAIL:
        //     return{
        //         ...state,
        //         error: action.payload
        //     }   
        case LOADING:
            return{
                ...state,
                loading: true
            }    
        case CLEAN:
            return{
                ...state,
                breedsDetail: []
            }        
            default:
                return {...state}
    }
}