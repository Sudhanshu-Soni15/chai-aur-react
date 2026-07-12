import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Sudhanshu-Soni15")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div className="mx-auto w-full bg-gray-100 p-4 rounded-lg flex  ">
      <h1 className="text-3xl font-bold order-2 flex justify-center items-center p-4">
        Github Followers: {data.followers}
      </h1>
      <img
        className="w-42 h-42 rounded-full flex mt-4 order-1 justify-end p-2 ml-4"
        src={data.avatar_url}
        alt={data.name}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async() => {
  const response = await fetch("https://api.github.com/users/Sudhanshu-Soni15");
  const data = await response.json();
  return data;
};