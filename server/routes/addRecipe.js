// Librairies
const express = require('express')
const router = express.Router()
const connection = require('../sqlConfig')

router.post('/', (req, res) => {

    // Getting recipe's data from the website form
    const recipeData = req.body

    console.log(recipeData)

    connection.query('INSERT INTO recipes_list (name, nbOfPersons, ingredients, cookingTools, steps, picture, category) VALUES (?)', [recipeData], (error, results) => {
        if (!error) {
            res.sendStatus(200)
            console.log(`Recipe successfully added to the database. ${results.affectedRows} row(s) affected.`)
        }
        else {
            res.status(500).send("A server error occured while adding the recipe.")
            console.log(error)
        }
    })
})

module.exports = router