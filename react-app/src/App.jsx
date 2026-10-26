import { createContext } from "react";
import { useState } from "react";
import Profile from "./pages/Profile";

export const UserContext = createContext()

function App() {
    const [user, setUser] = useState("TAUSIF");
    return (
        <div>
            <UserContext.Provider value={{user}}>
                <Profile />
            </UserContext.Provider>
        </div>
    )
}

export default App;