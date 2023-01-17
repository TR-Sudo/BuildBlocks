import "../styles/index.css";
import React from "react";
import Recipes from "./Recipes";

const App = () => {
    return(
        <section className="Hero">
            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                </section>
            </main>
            <Recipes/>
        </section>
    )
}
export default App;