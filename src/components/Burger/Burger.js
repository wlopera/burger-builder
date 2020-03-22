import React from "react";
import classes from "./Burger.css";
import BurgerIngredients from "../Burger/BurgerIngredient/BurgerIngredient";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let trxIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(trxIngredients);

  if (trxIngredients.length === 0) {
    trxIngredients = <p>Por favor, agregar ingredientes!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {trxIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
