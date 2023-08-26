import React from "react";

import styles from "./ErrorModal.module.css";

import { Card } from "../Card";
import { Button } from "../Button";

export const ErrorModal = ({ title, message, onCloseModal }) => (
  <Card className={styles["modal"]}>
    <header className={styles["header"]}>
      <h2>{title}</h2>
    </header>

    <div className={styles["content"]}>
      <p>{message}</p>
    </div>

    <footer className={styles["actions"]}>
      <Button onClick={onCloseModal}>Okay</Button>
    </footer>
  </Card>
);
