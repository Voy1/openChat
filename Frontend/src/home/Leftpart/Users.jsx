import React from "react";
import User from "./User";
// import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
//   const [allUsers, loading] = useGetAllUsers();
//   console.log(allUsers);

  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-600 rounded-md">
        Messages
      </h1>
      <div
        className="py-3 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(83vh - 6vh)" }}
      >
        {/* {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))} */}
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
      </div>
    </div>
  );

}
export default Users;