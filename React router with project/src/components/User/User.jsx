import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <div className="h-48 w-full flex items-center justify-center bg-rose-200">
        <h1 className="text-center font-bold text-3xl items-center">
          User: <span className=" text-cyan-700 uppercase">{userid}</span>
        </h1>
      </div>
    </>
  );
};

export default User;
