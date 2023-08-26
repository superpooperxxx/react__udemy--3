import React, { useState } from "react";
import { AddUser } from "./components/AddUser";
import { UsersList } from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleAddToUsersList = (user) => {
    if (showError) {
      setShowError(false);
    }

    setUsersList((current) => [...current, user]);
  };

  console.log(usersList);
  return (
    <div>
      <AddUser onAddNewUser={handleAddToUsersList} showError={setShowError} />

      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
