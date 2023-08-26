import React, { useState } from "react";

import styles from "./AddUser.module.css";

import { Card } from "../../UI/Card";
import { Button } from "../../UI/Button";

const initialUser = {
  username: "",
  age: "",
};

export const AddUser = ({ onAddNewUser, showError }) => {
  const [user, setUser] = useState(initialUser);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!user.username || !user.age) {
      return;
    }

    if (isNaN(+user.age) || user.age < 1) {
      showError(true);
      return;
    }

    onAddNewUser(user);

    setUser(initialUser);
  };

  const handleUserUpdate = (field, value) => {
    setUser((current) => ({
      ...current,
      [field]: value,
    }));
  };

  return (
    <Card className={styles["input"]}>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(event) => handleUserUpdate("username", event.target.value)}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="text"
          value={user.age}
          onChange={(event) => handleUserUpdate("age", event.target.value)}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
