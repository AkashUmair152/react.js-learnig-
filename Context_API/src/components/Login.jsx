import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex justify-center items-center h-1/2 mt-28">
      <div className="bg-white p-8 shadow-md rounded">
        <h2 className="text-4xl mb-4 text-center font-semibold">
          Context api Concept
        </h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
