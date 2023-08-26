import React from "react";

import styles from "./UsersList.module.css";
import { Card } from "../../UI/Card";

export const UsersList = ({ users }) => (
  <Card className={styles["users"]}>
    <ul>
      {users.map((user) => (
        <li key={user.username}>
          {user.username} ({user.age} years old)
        </li>
      ))}
    </ul>
  </Card>
);
