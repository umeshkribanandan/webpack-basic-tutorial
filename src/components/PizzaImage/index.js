import React from "react";
import styles from "./pizzaimage.module.css";
import pizzaImage from "../../assets/images/pizza.jpg";

const PizzaImage = () => {
  return (
    <div className={styles.PizzaImage}>
      <img className={styles.PizzaImg} src={pizzaImage} alt="Pizza Image" />
    </div>
  );
};

export default PizzaImage;
