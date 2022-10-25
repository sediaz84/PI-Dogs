import { useForm } from "../hook/useForm";
import { Link } from "react-router-dom";
import style from '../css/newBreed.module.scss';

const initialForm = { //son los valores inciales del formulario
    name:"",
    heightMin:"",
    heightMax:"",
    weightMin:"",
    weightMax:"",
    life_span_min:"",
    life_span_max:"",
    temperament:[],
    image:""
}; 

const validationsForm = (form) => { //una funcion que recibe los datos del formulario

let errors = {};    //esta variable guarda los errores                   
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;  //expresion regular valida que solo se acepten mayúsculas y minúsculas            
let regexNumbers = /^[0-9]\d*(\.\d+)?$/; //  /[0-9]/ es otra expresión regular para numeros
 

if(!form.name.trim()){  //el trim() evalua que tenga información, que no haya espacios en blanco
    errors.name = "El campo Nombre es requerido";
    } else if(!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
    }

if(!form.heightMin){
  errors.heightMin = "El campo es requerido";
} else if(!regexNumbers.test(form.heightMin.trim())) {  //validacion heightMin
  errors.heightMin = "Solo números"
} else if(form.heightMin < 10){
  errors.heightMin = "Altura mínima promedio no debe ser menor a 10 cm"
} else if(form.heightMin > 110){
  errors.heightMin = "Altura mínima promedio no debe ser mayor a 110 cm"
}

if(!form.heightMax){
  errors.heightMax = "El campo es requerido";
} else if(!regexNumbers.test(form.heightMax.trim())) {   //validación heightMax
  errors.heightMax = "Solo números"
} else if(parseInt(form.heightMax) <= parseInt(form.heightMin)){
  errors.heightMax = "La altura máxima deber ser mas alta que la mínima"
} else if(form.heightMax > 130){
  errors.heightMax = "La altura máxima no puede ser superior a 130cm"
}

if(!form.weightMin){
  errors.weightMin = "El campo es requerido";
} else if(!regexNumbers.test(form.weightMin.trim())) {    //validación weightMin
  errors.weightMin = "Solo números"
} else if(form.weightMin < 1) {
  errors.weightMin = "El peso mínimo no debe ser menor a 1kg"
} else if(form.weightMin > 70 ) {
  errors.weightMin = "La peso mínimo no puede superar 70kg "
}

if(!form.weightMax){
  errors.weightMax = "El campo es requerido";
} else if(!regexNumbers.test(form.weightMax.trim())) {    //validación weightMax
  errors.weightMax = "Solo números"
} else if(parseInt(form.weightMax) <= parseInt(form.weightMin)) {
  errors.weightMax = "El peso máximo debe ser mas alto que el peso mínimo"
} else if(form.weightMax > 150) {
  errors.weightMax = "El peso máximo no debe ser más de 150kg"
}

if(!form.life_span_min){
  errors.life_span_min = "El campo es requerido";
} else if(!regexNumbers.test(form.life_span_min.trim())) {  //validación life_span_min
  errors.life_span_min = "Solo números"
} else if (form.life_span_min < 6){
  errors.life_span_min = "La esperanza de vida no puede ser menor a 6 años"
} else if (form.life_span_min > 10){
  errors.life_span_min = "La esperanza de vida no puede ser mayor a 10 años"
}

if(!form.life_span_max){
  errors.life_span_max = "El campo es requerido";
} else if(!regexNumbers.test(form.life_span_max.trim())) {  //validación life_span_max
  errors.life_span_max = "Solo números"
} else if(parseInt(form.life_span_max) <= parseInt(form.life_span_min)){
  errors.life_span_max = "La esperanza máxima de vida no debe ser menor a la mínima"
} else if(form.life_span_max > 16){
  errors.life_span_max = "La esperanza máxima de vida no debe ser mayor a 16 años"
}

if(!form.image){
  errors.image = "El campo es requerido";
}

if(form.temperament.length === 0){
  errors.temperament = "Se requiere mínimo un temperamento"
}



return errors
}; 





const AddBreed = () => {          
  const {                        // se hace destructuracion de useForm       
    form,
    errors,
    temperament,
    handleChange,
    handleBlur,
    handleTemperaments,
    removeTemperaments,
    handleSubmit,
  } = useForm(initialForm, validationsForm); // useForm tiene los valores iniciales del formulario y la validaciones

  return (
    
      
    <div className={style.cont}>
      <form onSubmit={handleSubmit}>
      <div className={style.form}>
     <div className={style.nav}>
      <Link to="/home">
        <button className={style.buttonHome}>Home</button>
      </Link>
      </div>
           
      <h4 className={style.title}>Create New Breed</h4>            
        <div>
        <label className={style.labelName}>Name</label>
        <input 
          className={style.input}                                             //input name
          type="text"
          name="name"
          placeholder="Name Breed"
          onBlur={handleBlur}
          onChange={handleChange}          
          value={form.name}
          require='true'
        />
        {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>
        <div>
          <label className={style.labelHeightMin}>Height Min</label>
        <input 
          className={style.input}                                             //input heightMin en cm
          type="text"
          name="heightMin"
          placeholder="heightMin"
          maxLength={3}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.heightMin}
          require='true'
        />
        {errors.heightMin && <p className={style.error}>{errors.heightMin}</p>}
        </div>
        <div>
          <label className={style.labelHeightMax}>Height Max</label>
        <input  
          className={style.input}                                            // input heightMax en cm
          type="text"
          name="heightMax"
          placeholder="heightMax"
          maxLength={3}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.heightMax}
          require='true'
        />
        {errors.heightMax && <p className={style.error}>{errors.heightMax}</p>}
        </div>
        <div>
          <label className={style.labelWeightMin}>Weight Min</label>
        <input 
          className={style.input}                                            //input weightMin en kg
          type="text"
          name="weightMin"
          placeholder="weightMin"
          maxLength={2}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.weightMin}
          require='true'
        />
        {errors.weightMin && <p className={style.error}>{errors.weightMin}</p>}
        </div>
        <div>
          <label className={style.labelWeightMax}>Weight Max</label>
        <input 
          className={style.input}                                           //input weightMax en kg
          type="text"
          name="weightMax"
          placeholder="weightMax"
          maxLength={3}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.weightMax}
          require='true'
        />
        {errors.weightMax && <p className={style.error}>{errors.weightMax}</p>}
        </div>
        <div>
          <label className={style.labelLife_span_min}>Life Span Min</label>
        <input   
          className={style.input}                                         //input life_span_min
          type="text"
          name="life_span_min"
          placeholder="min"
          maxLength={2}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.life_span_min}
          require='true'
        />
        {errors.life_span_min && <p className={style.error}>{errors.life_span_min}</p>}
        </div>
        <div>
          <label className={style.labelLife_span_max}>Life Span Max</label>
        <input 
          className={style.input}                                            //input life_span_max
          type="text"
          name="life_span_max"
          placeholder="max"
          maxLength={2}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.life_span_max}
          require='true'
        />
        {errors.life_span_max && <p className={style.error}>{errors.life_span_max}</p>}
        </div>
        <div>
          <label className={style.labelImage}>Image</label>
        <input
        className={style.input}                                            //input image
        type="text"
        name="image"
        placeholder="image or url-image"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.image}
        require='true'
      />
      {errors.image && <p className={style.error}>{errors.image}</p>}
      </div>
        <div>
          <label className={style.labelTemperaments}>Temperaments</label>
          <div>  
          <select onChange={handleTemperaments} require="true" className={style.select}>
            <option disabled selected value='Temperaments'>Temperaments</option>
                {temperament.map((e, index) => (
                  <option value={e.name} name='temperaments' key={index}>{e.name}</option>
                ))}  
          </select> 
          </div> 
                    {errors.temperament && <p className={style.error}>{errors.temperament}</p>}                 
        </div>
                  <div>
                    {form.temperament.map((c, index) => (                                           
                      <button value={c} onClick={removeTemperaments} onBlur={handleBlur} key={index} className={style.buttonX}>{c} x</button>                      
                      ))}
                  </div>
        
      <div>
      <input type="submit" value="Create" className={style.buttonCreate} />
      </div>
      </div>
      </form>
    </div>
   
  );
};

export default AddBreed;
