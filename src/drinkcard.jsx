import React from "react";

const DrinkCard = ({ drink, onClick }) => {
  return (
    <div className="drink-card" onClick={onClick}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h3>{drink.strDrink}</h3>
    </div>
  );
};

export default DrinkCard;