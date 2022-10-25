import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, createBreed, getBreeds } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";


export const useForm = (initialForm, validateForm) => {  // por parámetros llega el estado inicial y la funcion validateForm(son todas las validaciones)
    const [form, setForm] = useState(initialForm);  // el estado inicial se reciben por parámetros 
    const [errors, setErrors] = useState({});       // se usa para los errores, se inicia como un objeto vacío, el cual se llenara de errores. Si el el objeto está vacío entonces no hay errores
    
    var nameDog = useSelector((state => state.breedsClean)) 
console.log(nameDog)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getTemperaments());       
    }, [dispatch])

    useEffect(() => {
        dispatch(getBreeds())
    }, [dispatch])

    const temperament = useSelector((state) => state.temperaments).sort((a, b) => {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1;}
        return 0;
    })
    console.log(temperament)

    const handleChange = (e) => {              //esta función se liga al value de los inputs
        setForm({
            ...form,                           //se pasa una copia del formulario
            [e.target.name]: e.target.value    //se hace el cambio por el evento que entra por parametro
        })
    }; 

    const handleBlur = (e) => {  // esta función lanza las validaciones al perder el foco las propiedades del formulario.
        handleChange(e)          //
        setErrors(validateForm(form)) //validateForm se ejecuta dentro del estado de error, y llenara el objeto vacío con los errores 
    }; 
    
    const handleTemperaments = (e) =>{
        if(form.temperament.includes(e.target.value)){
            return;
        } else {
        setForm({
            ...form,
            temperament: [...form.temperament, e.target.value]

        })
      }
    }

    const removeTemperaments = (e) =>{
        setForm({
            ...form,
            temperament: form.temperament.filter(el => el !== e.target.value )
        })
    }
    
    const handleSubmit = (e) => { // hace el submit(envía) del formulario
        e.preventDefault();
        setErrors(validateForm(form));
        
        if (form.name){
            var aux = nameDog.find(e => e.name === form.name)
            console.log(aux)
            if(aux !== undefined){
           return alert('Nombre repetido')
            } 
        }
        if(Object.keys(errors).length > 0 ){    //preguntamos si el objeto errores esta vacío, si se cumple se procesa
            alert("Falta completar campos por completar o hay un error")             
        } 
              
        else if(
            form.name === "" &&
            form.heightMin === "" &&                //si hay campos vacíos no prosigue
            form.heightMax === "" &&
            form.weightMin === "" &&
            form.weightMax === "" &&
            form.life_span_min === "" &&
            form.life_span_max === "" &&
            !form.temperament.length &&
            form.image === ""
        ){
            return alert("Hay campos sin completar")
        }        
            else {
            dispatch(createBreed(form));
            alert ("Breed created")              //crea la raza y devuelve al home
            setForm({
                name:"",
                heightMin:"",
                heightMax:"",
                weightMin:"",
                weightMax:"",
                life_span_min:"",
                life_span_max:"",
                temperament:[],
                image:""
        })
        history.push('/home') 
    }
        


    }; 

    return{
        form,
        errors,        
        temperament,
        nameDog,
        handleChange,
        handleBlur, 
        handleTemperaments,
        removeTemperaments,
        handleSubmit
    }
    
}