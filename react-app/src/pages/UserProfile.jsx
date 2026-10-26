import { useParams } from "react-router-dom";
function UserProfile(){
    const { id, name } = useParams();
    return(
        <div>
            <h1>User Profile Page</h1>
            <p>This is the profile page of our React application.</p>
            <p>User ID: {id}</p>
            <p>User Name: {name}</p>
        </div>
    )
}
export default UserProfile;