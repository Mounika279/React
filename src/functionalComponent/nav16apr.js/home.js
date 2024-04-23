import React, { useState, useEffect ,useContext } from "react";
import Header from "../16apr comp-nav/header";
import axios from "axios";
import { Link } from "react-router-dom";
import { DataShare } from "../16apr 2024/navigation";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
 const{AddtoCart,removecart} =useContext(DataShare)

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      if (response.status === 200) {
        setRecipes(response.data.recipes);
      } else {
        console.log("Error fetching recipes");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      <Header />
      {recipes.length > 0 ? (
        recipes.map((eachRecipe, index) => {
          const { name, image, id } = eachRecipe;
          return (
            <div className="trecipes" key={index}>
              <h2 className="hname">{name}</h2>
              <img
                className="himage" src={image} alt={name} height={200}width={200} />
              <br></br>
              <button className="btn3"> 
              <Link style={{ textDecoration: "none", color: "white" }} to={`${id}/${name}`}> 
              See More
                </Link>
              </button>
              <br></br>
              <button onClick={()=>AddtoCart(eachRecipe)} className="btn1">Add </button>
              <button onClick={()=>removecart(index)}className="btn2">Remove </button>
            </div>
          );
        })
      ) : (
        <h3>Chef is Working</h3>
      )}
    </>
  );
};

export default HomeScreen;
