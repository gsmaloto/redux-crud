import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/users/usersSlice";

const AddUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleHideModal = () => {
    setShowModal(false);
    setError("");
    setUsername("");
    setPassword("");
    setEmail("");
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError("All Fields are required!");
    } else {
      dispatch(
        addUser({
          id: users.length + 1,
          username,
          password,
          email,
        })
      );
      handleHideModal();
    }
  };
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add User</button>
      {/* modal */}
      {showModal && (
        <>
          <div
            className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50"
            onClick={handleHideModal}
          />
          <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen">
            <div className="bg-white w-[400px] p-4 mx-2">
              <IoCloseSharp
                className="float-right text-3xl cursor-pointer"
                onClick={handleHideModal}
              />
              <h3 className="mb-4 text-xl font-semibold text-center">
                Add New Account
              </h3>
              {error && (
                <h4 className="px-4 py-1 my-4 text-white bg-red-600 rounded-md">
                  {error}
                </h4>
              )}
              <form className="flex flex-col gap-4 px-4">
                <div className="flex flex-wrap">
                  <label className="w-[80px] font-semibold">Username </label>
                  <input
                    autoFocus
                    className="flex-1 px-2 border-2"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap">
                  <label className="w-[80px] font-semibold">Password </label>
                  <input
                    className="flex-1 px-2 border-2"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap">
                  <label className="w-[80px] font-semibold">Email </label>
                  <input
                    className="flex-1 px-2 border-2"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    className="flex-1 px-4 py-2 text-white bg-blue-600 hover:bg-blue-400"
                    onClick={handleAddUser}
                  >
                    Add
                  </button>
                  <button
                    className="flex-1 px-4 py-2 text-white bg-gray-400 hover:bg-gray-300"
                    onClick={handleHideModal}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddUser;
