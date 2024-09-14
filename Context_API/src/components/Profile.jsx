import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <div className="flex justify-center items-center h-1/2 mt-10">
      <div className="text-2xl bg-white p-8 shadow-md rounded">
        Welcome, {user.username}!
      </div>
    </div>
  );
};

export default Profile;
