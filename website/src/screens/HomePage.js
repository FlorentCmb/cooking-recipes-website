// Librairies
import { useState, useEffect } from 'react'
import axios from 'axios'
// Components
import RecipeCard from '../components/RecipeCard'
// Style
import './HomePage.css'

const HomePage = () => {

    // State
    const [filterValue, setFilterValue] = useState("")
    const [activeInput, setActiveInput] = useState("all")
    const [recipes, setRecipes] = useState([])

    // useEffect
    useEffect(() => {
        getRecipes()
    }, [])

    useEffect(() => {
        console.log(recipes)
    }, [recipes])

    /* Functions */
    // Get the recipes from the server
    const getRecipes = () => {
      axios.get('http://localhost:5000/recipes/thumbnails')
      .then(response => {
        setRecipes(response.data)
      })
      .catch(error => {
        console.log(error)
      })

      setActiveInput("all")
    }

    const getRecipesByCategory = category => {
        axios.get(`http://localhost:5000/category/${category}/thumbnails`)
        .then(response => {
            setRecipes(response.data)
        })
        .catch(error => {
            console.log(error)
        })

        setActiveInput(category)
    }

    // Controled input function
    const inputHandler = e => {
        setFilterValue(e.target.value)
    }

    // Render
    return (
        <section className="HomePage">
            <div className="HomePage-Filters-Container">
                <input className="HomePage-Filter-Input" type="text" placeholder="Rechercher..." value={filterValue} onChange={inputHandler} />
                <input className={`HomePage-Filter-Button ${activeInput === "all" ? "HomePage-Filter-Button-Active" : ""}`} type="button" value="Tout" onClick={() => getRecipes()} />
                <input className={`HomePage-Filter-Button ${activeInput === "Entrée" ? "HomePage-Filter-Button-Active" : ""}`} type="button" value="Entrées" onClick={() => getRecipesByCategory("Entrée")} />
                <input className={`HomePage-Filter-Button ${activeInput === "Plat" ? "HomePage-Filter-Button-Active" : ""}`} type="button" value="Plats" onClick={() => getRecipesByCategory("Plat")} />
                <input className={`HomePage-Filter-Button ${activeInput === "Dessert" ? "HomePage-Filter-Button-Active" : ""}`} type="button" value="Desserts" onClick={() => getRecipesByCategory("Dessert")} />
                <input className={`HomePage-Filter-Button ${activeInput === "Boisson" ? "HomePage-Filter-Button-Active" : ""}`} type="button" value="Boissons" onClick={() => getRecipesByCategory("Boisson")} />
                {recipes.length > 0 ? <p className="HomePage-Filter-Results">{recipes.length} recette(s)</p> : ""}
            </div>
            <div className="HomePage-Recipe-Cards">
                {recipes.length > 0 && recipes.map((item, index) => (
                    <RecipeCard recipeData={item} key={`Recipe n°${index}`} />
                ))}
            </div>
        </section>
    )
}

export default HomePage