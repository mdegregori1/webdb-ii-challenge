const express = require('express');

const db = require("../data/dbConfig"); 
const router = express.Router(); 

router.use(express.json());

router.post('/', (req, res ) => {
    const carData = req.body
    if (carData.VIN && carData.make && carData.model && carData.mileage){
        db.insert(carData, "id").into('car-dealer')
        .then(e => {
            const id = e[0];
            db("car-dealer")
                .where({id})
                .first()
                .then(car => {
                    res.status(201).json(car)
                })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({errorMessage: "Error adding the car information"})
        })
    } else {
        res.status(400).json({message: "Please add all of the required information"})
    }
})

router.get('/', (req, res) => {
    db.select('*').from('car-dealer')
    .then( car => {
        res.status(200).json(car)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error getting the list of cars"})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.select('*').from('car-dealer').where({id:id}).first()
    .then(id => {
        if(id){
            res.status(200).json(id)
        } else {
            res.status(404).json({message: "the account with the specific id was not found "})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error retrieving the account "})
    })
})



module.exports = router;

