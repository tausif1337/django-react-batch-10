import {useContext} from "react";
import { UserContext } from "../App";
function Profile(){

    const {user} = useContext(UserContext);
    return(
        <div>
            <h1>Profile Page</h1>
            <p>This is the profile page of our React application.</p>
            <p>Welcome, {user}!</p>
        </div>
    )
}
export default Profile;