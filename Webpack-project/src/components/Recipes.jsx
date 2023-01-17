import { useState } from 'react';

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refineMoonstone: 4
}
const elvenGauntletsRecipe={
    ...elvenShieldRecipe,
    leather:1,
    refineMoonstone:4,
}
const Recipes = () => {
    const [recipes, setRecipes] = useState({});
    return (
        <div>
            <h3>Current Recipes</h3>
            <button onClick={() => setRecipes(elvenShieldRecipe)}>elvenShieldRecipe Recipes</button>
            <button onClick={() => setRecipes(elvenGauntletsRecipe)}>elvenGauntletsRecipe Recipes</button>

            <ul>
                {Object.entries(recipes).map(([material, quantity]) => (
                    <li key={material}>
                        {material}: {quantity}
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default  Recipes;
