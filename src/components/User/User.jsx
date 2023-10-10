import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <h1 className="text-center bg-gray-500 text-3xl p-4 text-white">
        user: {userid}
      </h1>
    </>
  );
};

export default User;
