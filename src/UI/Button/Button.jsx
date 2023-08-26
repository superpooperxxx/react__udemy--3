import React from "react";

import styles from "./Button.module.css";

export const Button = ({ type, onClick, children }) => (
  <button className={styles.button} type={type || "button"} onClick={onClick}>
    {children}
  </button>
);
