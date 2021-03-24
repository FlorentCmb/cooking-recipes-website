// Librairies
const express = require('express')
const router = express.Router()
const connection = require('../sqlConfig')

// Get a recipe by its id
router.get('/:id', (req, res) => {

    const recipeId = req.params.id

    connection.query('SELECT * FROM recipes_list WHERE id=?', recipeId, (error, results) => {
        if (!error) {
            res.json(results)
            console.log(`Success. Recipe fetched.`)
        }
        else {
            res.status(500).send("An error has occured while fetching the recipe.")
            console.log(error)
        }
    })
})

module.exports = router