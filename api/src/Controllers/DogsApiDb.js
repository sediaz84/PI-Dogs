require('dotenv').config();
const axios = require('axios');
const { Dog, Temperament } = require('../db');
const { API_KEY } = process.env;



const getBreedsApiDb = async (req, res) => {
       
    try{   
        const allDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        //console.log(allDogs.data)
        if(allDogs.data){
        var allBreeds = allDogs.data.map(e => {
            return{
                id: e.id,
                name: e.name,
                height: e.height.metric,
                weight: e.weight.metric,
                life_span: e.life_span,
                temperament: e.temperament,
                image: e.image.url
            }
        }) 
        //console.log(allBreeds)
    } 

    var dbDogs = await Dog.findAll({
                    include: [{
                        model: Temperament,
                        attributes: ['name'],
                        through: {
                            attributes: []
                        }
                    }]
                })

    var dbBreeds = dbDogs.map(e=>{
        return {
            id: e.id,
            name: e.name,
            height: e.height,
            weight: e.weight,
            life_span: e.life_span,
            temperament: e.dataValues.temperaments.map(el => el.name).join(', '),
            image: e.image
        }
    })
                //console.log(dbDogs)
                var allBreedsApiDb = [...allBreeds, ...dbBreeds]
                return allBreedsApiDb
         
    } catch (error) { console.log(error) }
}

const getBreedsApiDbName = async (req, res) =>{
    const { name } = req.query;
    var allData = await getBreedsApiDb();
    try {
        if(name) {
           var searchName = allData.filter(dog => dog.name === name)
            searchName.length>0 ? res.status(200).json(searchName) : res.status(404).send({'msg': 'Breed not found'})
        } else {
            res.status(200).json(allData)
        }
    } catch (error) {
        console.log(error)
    }
}  

const getBreedsID = async (req, res)=>{
    const { id } = req.params;
    var allId = await getBreedsApiDb();
    

    try {
        if(id){
            let breedId = allId.filter(el => el.id === Number(id))
            //console.log(allId)
            breedId.length>0 ? res.status(200).json(breedId) : res.status(404).send('Breed not found')
        } 
        
    } catch (error) {
        console.log('breedId not found')
    }

}

const postCreatedBreed = async (req, res) =>{
    const { name, height, weight, life_span, temperament, image } = req.body;

    try {
        const newBreed = await Dog.create({
            name,
            height,
            weight,
            life_span,
            image
                     
        });
        //console.log(newBreed)
        await newBreed.addTemperaments(temperament)
        res.status(201).json(newBreed)
        
    } catch (error) {
        console.log(error)
        
    }

}





module.exports = {
    getBreedsApiDbName,
    getBreedsID,
    postCreatedBreed
}

