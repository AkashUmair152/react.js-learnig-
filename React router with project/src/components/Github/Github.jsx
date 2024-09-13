import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/AkashUmair152/repos`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the repositories data
        setData(data);
      });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-rose-200">
      <h1 className="text-center font-bold text-3xl">My Repositories:</h1>
      <ul className="mt-4 list">
        {data.map((data) => (
          <li key={data.id} className="text-black text-2xl font-serif">
            <a href={data.html_url} target="_blank" className="leading-relax">
              {data.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Github;
