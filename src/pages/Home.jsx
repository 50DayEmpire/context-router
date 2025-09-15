import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { userData } from "../helpers/userData";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(userData);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Home Screen</h1>
      {user && <h2>{user.data.first_name}</h2>}

      {!user ? (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button className="btn btn-danger" onClick={() => setUser(null)}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
