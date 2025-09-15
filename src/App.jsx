import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
