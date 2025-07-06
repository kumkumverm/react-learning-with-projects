import React from 'react';
import Recommends from './Recommed';
import IngrediantsList from './IngredientsList';
import { getRecipeFromMistral } from '../utilies/ai';
export default function Main() {

    let [Ingredients, setNewIngredient] = React.useState([]);


    function AddIngregient(formData) {
        const newIngredient = formData.get("Ingredient");
        setNewIngredient(PrevNewIngredient =>
            [...PrevNewIngredient, newIngredient]
        )
    }
    const [recipe, setRecipe] = React.useState(false)
    const recipeSection=React.useRef(null)

    React.useEffect(()=>{
        if(recipe!== "" && recipeSection.current !==null){
            // recipeSection.current.scrollIntoView({behavior:"smooth"})
const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY;
window.scroll({
                top:yCoord,
                behavior:"smooth"
            })
        }
    },[recipe])
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(Ingredients)
        setRecipe(recipeMarkdown)
        console.log(recipeMarkdown)
    }
    return (
        <main>

            <form action={AddIngregient} className="add-ingredient-form" >
                <input className="enterIng"
                    type="text"
                    placeholder="e.g. Onion"
                    aria-label="Add Ingredient"
                    name="Ingredient"
                />
                <button  type="submit">Add Ingredient</button>
            </form>
            {Ingredients.length > 0 &&
                <IngrediantsList
                ref={recipeSection}
                    Ingredients={Ingredients}
                    getRecipe={getRecipe} />
            }
            {recipe && <Recommends
            recipe={recipe}
            />
            }
        </main>
    )
}