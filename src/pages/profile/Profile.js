import Layout from "../../Layout/Layout";
import { useAuth } from "../../Providers/AuthProvider";
import "./profile.css";
const Profile = () => {
  const userData = useAuth();
  return (
    <Layout>
      <main className="container">
        <h2 style={{ marginBottom: "20px" }}>Your Profile</h2>
        <div className="profileCenter">
          <p>Name : {userData.name}</p>
          <p>Email : {userData.email}</p>
          <p>Phone Number : {userData.phoneNumber}</p>
          <button className="logoutBtn">Log Out</button>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
