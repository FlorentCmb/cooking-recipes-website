// Librairies
const express = require('express')
const router = express.Router()
const connection = require('../sqlConfig')

router.delete('/:id', (req, res) => {

    const recipeId = req.params.id

    connection.query('DELETE FROM recipes_list WHERE id = ?', recipeId, (error, results) => {
        if (!error) {
            res.status(200).send('Recipe successfully deleted.')
            console.log(`Recipe n°${recipeId} successfully deleted from the database. ${results.affectedRows} row(s) affected.`)
        }
        else {
            res.status(500).send("A server error occured while removing the recipe.")
            console.log(error)
        }
    })
})

module.exports = router