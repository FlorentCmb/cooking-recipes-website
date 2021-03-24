// Librairies
const express = require('express')
const router = express.Router()
const connection = require('../sqlConfig')

// Get the recipes of a given category
router
    .get('/:category', (req, res) => {

        const recipeCategory = req.params.category

        connection.query('SELECT * FROM recipes_list WHERE category=? ORDER BY name', recipeCategory, (error, results) => {
            if (!error) {
                res.json(results)
                console.log(`Success. ${results.length} recipe(s) found for ${recipeCategory} category.`)
            }
            else {
                res.status(500).send(`An error has occured while fetching "${recipeCategory}" recipes.`)
            }
        })
    })
    .get('/:category/thumbnails', (req, res) => {
        
        const recipeCategory = req.params.category

        connection.query('SELECT id, name, nbOfPersons, ingredients, picture, category FROM recipes_list WHERE category=? ORDER BY name', recipeCategory, (error, results) => {
            if (!error) {
                res.json(results)
                console.log(`Success. ${results.length} recipe(s) found for ${recipeCategory} category.`)
            }
            else {
                res.status(500).send(`An error has occured while fetching "${recipeCategory}" recipes.`)
            }
        })
    })

module.exports = router