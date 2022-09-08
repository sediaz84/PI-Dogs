import { GET_BREEDS, GET_SEARCH, DETAIL_BREEDS, FAIL, LOADING, 
         FILTER_TEMPERAMENT, GET_TEMPERAMENTS, ORDER_BY  } from "../actions/actions";
import { A_Z, Z_A, WEIGHT_MAX, WEIGHT_MIN  } from "../../constantes/order";         

const initialState = {
    breeds: [],
    breedsClean: [],
    temperaments: [],
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
                error:""
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
                        if(a.weight < b.weight) {
                            return -1
                        } else return 1
                    case WEIGHT_MIN:
                        if(a.weight > b.weight) {
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
            let aux = allTemperaments.filter(e => e.temperament)
            //let filter = allTemperaments.includes(action.payload) 
            let aux2 = aux.filter(el => el.temperament.includes(action.payload))
            console.log(aux2)                       
            // //if(action.payload === 'All  Temperaments') return {...state, breeds: state.breeds}
            // let temperamentsFilter = allTemperaments?.filter(e => e.temperament.includes(action.payload));
            // console.log(temperamentsFilter)
            
            return {
                ...state,
                breeds: aux2
            }                 
        case FAIL:
            return{
                ...state,
                error: action.payload
            }   
        case LOADING:
            return{
                ...state,
                loading: true
            }         
            default:
                return {...state}
    }
}