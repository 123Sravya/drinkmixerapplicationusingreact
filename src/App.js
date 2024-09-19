import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DrinkCard from "./DrinkCard";
import DrinkDetails from "./DrinkDetails";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);

  const fetchDrinks = async (drinkName) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
      );
      setDrinks(response.data.drinks || []);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar onSearch={fetchDrinks} />
      <div className="drink-container">
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
            onClick={() => setSelectedDrink(drink)}
          />
        ))}
      </div>
      {selectedDrink && (
        <DrinkDetails
          drink={selectedDrink}
          onClose={() => setSelectedDrink(null)}
        />
      )}
    </div>
  );
};

export default App;
