// Librairies
const express = require('express')
const router = express.Router()
// Routes
const singleRecipe = require('./singleRecipe')
const allRecipes = require('./allRecipes')
const categoryFilteredRecipes = require('./categoryFilteredRecipes')
const addRecipe = require('./addRecipe')
const deleteRecipe = require('./deleteRecipe')

// 'GET' routes
router.use('/recipe', singleRecipe)
router.use('/recipes', allRecipes)
router.use('/category', categoryFilteredRecipes)
// 'POST' routes
router.use('/add-recipe', addRecipe)
// 'DELETE' routes
router.use('/delete-recipe', deleteRecipe)

// Export
module.exports = router