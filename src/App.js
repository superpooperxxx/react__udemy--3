import React, { useState } from "react";
import { AddUser } from "./components/AddUser";
import { UsersList } from "./components/UsersList";
import { ErrorModal } from "./UI/ErrorModal/ErrorModal";

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
      {showError && (
        <ErrorModal
          title="An error occured!"
          message="Something went wrong!"
          onCloseModal={() => setShowError(false)}
        />
      )}

      <AddUser onAddNewUser={handleAddToUsersList} showError={setShowError} />

      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
