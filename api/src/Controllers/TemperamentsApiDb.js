require('dotenv').config();
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const db = require('../db')

const getTemperaments = async (req, res)=>{
    try {
        const dbTemperament = await Temperament.findAll({
            include: [{
                model: Dog,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        })

        if(!dbTemperament.length){
            const apiData = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
            
            const apiTemperament = apiData.data.map(e=> {
                return{
                    temperament: e.temperament
                }
            })
            
            let aux = apiTemperament.map(e=> Object.values(e)).flat().join(', ').split(', ');
            let aux2 = new Set(aux)
            let aux3 = [...aux2]
            let arrayTemperaments = aux3.filter(e=> e !== "").slice(1)
            console.log(arrayTemperaments)

              arrayTemperaments.map(el=> Temperament.findOrCreate({
                    where: {name: el}
              }))
            
            
           //console.log(dbTemperament)
            
                 
        } else { res.json(dbTemperament) }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTemperaments
}