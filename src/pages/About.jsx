import React from "react";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { userData } from "../helpers/userData";

const About = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(userData);
  };

  return (
    <div className="container text-center mt-5">
      <h1>About Screen</h1>
      {user && (
        <h2>
          {user.data.first_name} {user.data.last_name}
        </h2>
      )}
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      {!user ? (
        <h2 className="text-danger">Por favor inicie sesión</h2>
      ) : (
        <div>
          {" "}
          <p>Bienvenido a la sección de información</p>{" "}
          <img
            src={user.data.avatar}
            alt={user.data.id}
            width="150px"
            height="150px"
          />{" "}
        </div>
      )}
    </div>
  );
};

export default About;
