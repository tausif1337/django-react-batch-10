import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users/")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch data");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setUsers(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    async function dataFetch() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log("Error", error);
      }
    }

    dataFetch();
  }, []);

  return (
    <>
      <div>
        <h1>Users Data</h1>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
              textAlign: "center",
              width: "fit-content",
              borderRadius: "8px",
            }}
          >
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;