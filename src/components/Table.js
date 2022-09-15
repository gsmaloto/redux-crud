import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, deleteUser } from "../features/users/usersSlice";
import AddUser from "./AddUser";

const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleUpdate = (e, id) => {
    e.preventDefault();
    dispatch(updateUser({ id, username, password, email }));
  };
  console.log(users);

  const renderRows = () => {
    return users.map((user) => (
      <tr
        key={user.id}
        className={` border-b-2 ${user.id % 2 == 0 ? "bg-gray-100" : ""} `}
      >
        <td className="overflow-ellipsis">{user.username}</td>
        <td className="overflow-hidden text-ellipsis">{user.password}</td>
        <td className="overflow-hidden text-ellipsis">{user.email}</td>
        <td>
          <div className="flex justify-center gap-4 p-2 text-center">
            <FaTrashAlt
              className="text-xl text-red-600 cursor-pointer hover:scale-110"
              onClick={() => dispatch(deleteUser(user.id))}
            />
            <FaEdit
              className="text-xl text-green-600 cursor-pointer hover:scale-110"
              onClick={() => {
                setId(user.id);
                setUsername(user.username);
                setPassword(user.password);
                setEmail(user.email);
                setShowModal(true);
              }}
            />
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="max-w-[700px] mx-auto py-4 px-1">
      <AddUser />
      <table className="w-full overflow-x-hidden text-sm border-2 table-fixed borer-spacing-4">
        <thead className="text-white bg-blue-700 ">
          <tr>
            <th className="p-3 w-[40%] overflow-ellipsis">Username</th>
            <th className="p-3 w-[20%] overflow-ellipsis">Password</th>
            <th className="p-3 w-[20%] overflow-ellipsis">Email</th>
            <th className="p-3 overflow-ellipsis">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            renderRows()
          ) : (
            <tr>
              <td colSpan="4">
                <h4 className="py-4 text-xl font-semibold text-center bg-gray-200">
                  No Users
                </h4>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* modal */}
      {showModal && (
        <>
          <div
            className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50"
            onClick={() => {
              setShowModal(false);
            }}
          />
          <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen">
            <div className="bg-white w-[400px] p-4 mx-2">
              <IoCloseSharp
                className="float-right text-3xl cursor-pointer"
                onClick={() => {
                  setShowModal(false);
                }}
              />
              <h3 className="text-xl font-semibold text-center ">
                Account Information
              </h3>
              <form className="flex flex-col gap-4 px-4 mt-10">
                <div className="flex flex-wrap">
                  <label className="w-[80px] font-semibold">Username </label>
                  <input
                    className="flex-1 px-2 border-2"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap">
                  <label className="w-[80px] font-semibold">Password </label>
                  <input
                    className="flex-1 px-2 border-2"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap">
                  <label className="w-[80px] font-semibold">Email </label>
                  <input
                    className="flex-1 px-2 border-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        updateUser({
                          id,
                          username,
                          password,
                          email,
                        })
                      );
                      setShowModal(false);
                    }}
                    className="flex-1 px-4 py-2 text-white bg-blue-600 hover:bg-blue-400"
                  >
                    Update
                  </button>
                  <button
                    className="flex-1 px-4 py-2 text-white bg-gray-400 hover:bg-gray-300"
                    onClick={() => {
                      setShowModal(false);
                    }}
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

export default Table;
