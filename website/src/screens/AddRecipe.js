// Librairies
// import axios from 'axios'
import { useEffect, useState } from 'react'
// Style
import './AddRecipe.css'

const AddRecipe = () => {

    // States
    const [recipe, setRecipe] = useState({})
    const [name, setName] = useState("")
    const [nbOfPersons, setNbOfPersons] = useState(1)
    const [ingredients, setIngredients] = useState([])
    const [ingredientData, setIngredientData] = useState({ name: "", qtyValue: 0, qtyType: "g" })
    const [cookingTools, setCookingTools] = useState([])
    const [currentTool, setCurrentTool] = useState("")

    // useEffect
    useEffect(() => {
        console.log(ingredients)
    }, [ingredients])

    // Functions
    const addIngredient = () => {
        const ingredientsArray = ingredients.concat(ingredientData)
        setIngredients(ingredientsArray)
        setIngredientData({ name: "", qtyValue: 0, qtyType: "g" })
    }

    const removeIngredient = item => {
        setIngredients(ingredients.filter(ingredient => ingredient !== item))
    }

    const addCookingTool = () => {
        setCookingTools(cookingTools.concat(currentTool))
        setCurrentTool("")
    }

    const removeCookingTool = item => {
        setCookingTools(cookingTools.filter(cookingTool => cookingTool !== item))
    }

    // Render
    return (
        <section className="AddRecipe">
            <form className="AddRecipe-Form-Container">
                <label className="AddRecipe-Label" name="Recipe-Name" >
                    Nom de la recette :
                    <input className="AddRecipe-Input" type="text" placeholder="ex : Tarte aux pommes" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label className="AddRecipe-Label" name="Recipe-NbOfPersons">
                    Nombre de personnes :
                    <input className="AddRecipe-Input" type="number" min={1} value={nbOfPersons} onChange={e => setNbOfPersons(e.target.value)} />
                </label>
                <div className="AddRecipe-Ingredients-Container">
                    <label className="AddRecipe-Label" name="Recipe-Ingredient-Name">
                        Nom de l'ingr??dient :
                        <input className="AddRecipe-Input" type="text" placeholder="ex : Farine" value={ingredientData.name} onChange={e => setIngredientData({ ...ingredientData, name: e.target.value })} />
                    </label>
                    <label className="AddRecipe-Label" name="Recipe-Ingredient-QtyValue">
                        Quantit?? :
                        <input className="AddRecipe-Input" type="number" min={0} step={.01} value={ingredientData.qtyValue} onChange={e => setIngredientData({ ...ingredientData, qtyValue: e.target.value })} />
                    </label>
                    <label className="AddRecipe-Label" name="Recipe-Ingredient-QtyType">
                        Type :
                        <select value={ingredientData.qtyType} onChange={e => setIngredientData({ ...ingredientData, qtyType: e.target.value })}>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                            <option value="mL">mL</option>
                            <option value="cL">cL</option>
                            <option value="L">L</option>
                            <option value="unit??(s)">unit??(s)</option>
                            <option value="pinc??e(s)">pinc??e(s)</option>
                            <option value="cuil. ?? caf??">cuil. ?? caf??</option>
                            <option value="cuil. ?? soupe">cuil. ?? soupe</option>
                            <option value="sachet(s)">sachet(s)</option>
                            <option value="gousse">gousse</option>
                            <option value="tablette(s)">tablette(s)</option>
                            <option value="feuille(s)">feuille(s)</option>
                        </select>
                    </label>
                    <input className="AddRecipe-Button" type="button" value="Ajouter l'ingr??dient" onClick={addIngredient} />
                    <div className="AddRecipe-Ingredients-List">
                        {ingredients.length > 0 ? ingredients.map((item, index) => (
                            <div className="Recipe-Single-Ingredient" key={`Ingredient n??${index}`}>
                                <p className="Recipe-Single-Ingredient-Text">{item.name} ({item.qtyValue} {item.qtyType}) <span onClick={() => removeIngredient(item)}>x</span></p>
                            </div>
                        )) : ""}
                    </div>
                </div>
                <div className="Recipe-CookingTools-Container">
                    <label className="AddRecipe-Label" name="Recipe-CookingTool">
                        Ustensiles de cuisine
                        <input className="AddRecipe-Input" type="text" placeholder="ex : Marise" value={currentTool} onChange={e => setCurrentTool(e.target.value)} />
                    </label>
                    <input className="AddRecipe-Button" type="button" value="Ajouter cet ustensile" onClick={addCookingTool} />
                    <div className="AddRecipe-CookingTools-List">
                        {cookingTools.length > 0 ? cookingTools.map((item, index) => (
                            <div className="Recipe-Single-CookingTool" key={`Cooking tool n??${index}`}>
                                <p className="Recipe-Single-Ingredient-Text">{item} <span onClick={() => removeCookingTool(item)}>x</span></p>
                            </div>
                        )) : ""}
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AddRecipe