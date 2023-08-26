import React from "react";

import styles from "./Card.module.css";

export const Card = ({ className, children }) => (
  <div className={`${styles["card"]} ${className}`}>{children}</div>
);
