import { useParams } from "react-router";

function User() {
  const { userid } = useParams();
  return (
    <div className="mx-auto w-full max-w-7xl bg-gray-100 p-4 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold ">User: {userid}</h1>
    </div>
  );
}
export default User;
