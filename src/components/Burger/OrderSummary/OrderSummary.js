import React from "react";
import Aux from "../../../hoc/Auxiliar";

const orderSummary = (props) => {
  const ingredientSummay = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Su orden:</h3>
      <p>Una deliciosa hamburguesa con: </p>
      <ul>{ingredientSummay}</ul>
      <p>Continuar revisando?</p>
    </Aux>
  );
};

export default orderSummary;
