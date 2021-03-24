// Librairies
const express = require('express')
const router = express.Router()
const connection = require('../sqlConfig')

// Get the recipes by alphabetical order, regardless of category
router
    .get('/', (req, res) => {
        connection.query('SELECT * FROM recipes_list ORDER BY name', (error, results) => {
            if (!error) {
                res.json(results)
                console.log(`Success. ${results.length} recipes fetched.`)
            }
            else {
                res.status(500).send("An error has occured while fetching the recipes.")
                console.log(error)
            }
        })
    })
    .get('/thumbnails', (req, res) => {
        connection.query('SELECT id, name, nbOfPersons, ingredients, picture, category FROM recipes_list ORDER BY name', (error, results) => {
            if (!error) {
                res.json(results)
                console.log(`Success. ${results.length} recipes fetched.`)
            }
            else {
                res.status(500).send("An error has occured while fetching the recipes.")
            }
        })
    })



module.exports = router