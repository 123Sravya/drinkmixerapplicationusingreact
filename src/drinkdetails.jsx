import React from "react";

const DrinkDetails = ({ drink, onClose }) => {
  return (
    <div className="drink-details">
      <button onClick={onClose}>Close</button>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h2>{drink.strDrink}</h2>
      <p>{drink.strInstructions}</p>
      <ul>
        {Object.keys(drink)
          .filter((key) => key.startsWith("strIngredient") && drink[key])
          .map((key, index) => (
            <li key={index}>{drink[key]}</li>
          ))}
      </ul>
    </div>
  );
};

export default DrinkDetails;
