// Librairies
import { Link } from 'react-router-dom'
// Style
import './RecipeCard.css'
// Pictures
import defaultPicture from '../assets/defaultRecipePicture.jpg'
import personIcon from '../assets/personIcon.png'

const RecipeCard = ({ recipeData }) => {

    // Render
    return (
        <div className="RecipeCard">
            <Link className="RecipeCard-Link" to={`/recipe/${recipeData.id}`}>
                <img className="RecipeCard-Picture" src={defaultPicture} alt="Recette" />
                <p className="RecipeCard-Name">{recipeData.name}</p>
                <div className="RecipeCard-Specs">
                    <p className="RecipeCard-Category">{recipeData.category}</p>
                    <p className="RecipeCard-Persons">{recipeData.nbOfPersons}x <img className="RecipeCard-Persons-Icon" src={personIcon} alt="Person Icon" /></p>
                </div>
            </Link>
        </div>
    )
}

export default RecipeCard