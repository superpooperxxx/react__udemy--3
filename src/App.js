import React, { useState } from "react";
import { AddUser } from "./components/AddUser";
import { UsersList } from "./components/UsersList";
import { ErrorModal } from "./UI/ErrorModal/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState(null);

  const handleAddToUsersList = (user) => {
    if (error) {
      setError(null);
    }

    setUsersList((current) => [...current, user]);
  };

  console.log(usersList);
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={() => setError(null)}
        />
      )}

      <AddUser onAddNewUser={handleAddToUsersList} showError={setError} />

      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
