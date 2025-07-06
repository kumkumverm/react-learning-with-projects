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
              <div ref={props.ref}>  <h3>Ready for a recipe</h3>
                <p>Generate a recipe from your list of ingredients</p></div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
           </section>
    )
}