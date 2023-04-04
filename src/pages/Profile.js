import Layout from "../Layout/Layout"
import { useAuth } from "../Providers/AuthProvider";
const Profile = () => {
    const userData = useAuth();
    return ( 
        <Layout>
            <div>
                <p>Name : {userData.name}</p>
                <p>Email : {userData.email}</p>
                <p>Phone Number : {userData.phoneNumber}</p>
                <button>Log Out</button>
            </div>
        </Layout>
     );
}
 
export default Profile;