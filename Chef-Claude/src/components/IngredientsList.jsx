export default function IngrediantsList(props){
    const listIng = props.Ingredients.map((Ing) => {
        return <li key={Ing}>{Ing}</li>
    })
    return(
        <section >
            <h2>Ingredients on hand:</h2>
             <ul aria-live='polite' className="ingredients-list">
                {listIng}
            </ul>
           { props.Ingredients.length>3 &&<div className="get-recipe-container">
                <h3>Ready for a recipe</h3>
                <p>Generate a recipe from your list of ingredients</p>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
           </section>
    )
}