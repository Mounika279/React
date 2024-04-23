import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataShare } from "../16apr 2024/navigation";
import Header from "../16apr comp-nav/header";

const ReciepeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { AddtoCart, removecart ,index } = useContext(DataShare);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipe/${id}`);
      if (response.status === 200) {
        setRecipe(response.data);
      }
    } catch (err) {
      console.error("Error fetching recipe:", err);
    }
  };

  return (
    <div className="recipe-detail-container"> {/* Updated CSS class */}
      <Header />
      <div className="recipe-content"> {/* Updated CSS class */}
        {/* <h2>Recipe Details</h2> */}
        <div className="totalrecipe">
          <h4 className="rname">Recipe Name: {recipe?.name}</h4>
          {/* <h4 className="rcuisine">Cuisine Type: {recipe?.cuisine}</h4> */}
          <img
            className="rimage"
            src={recipe?.image}
            alt={recipe?.name}
            height={250}
            width={250}
          />
          <p className="rinstruct">
            <b>Instructions:</b> {recipe?.instructions}
          </p>
          <p className="rtime">
            Preparation Time: {recipe?.prepTimeMinutes} Minutes
          </p>
          <br />
          <p className="rtype"  >
            Meal Type: {recipe?.mealType}
          </p>
          <div className="recipe-buttons">
            <button onClick={() => AddtoCart(recipe)} className="rbtn1">
              Add
            </button>
            <button onClick={() => removecart(index)} className="rbtn2">
              Remove 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReciepeDetail;
