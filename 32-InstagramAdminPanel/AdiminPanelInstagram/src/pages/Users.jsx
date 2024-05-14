import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, endPoints } from "../services/api";
import { getAllData } from "../services/index";

import { setUsers, deleteUser } from "../redux/slices/usersSlice";
import { Link } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    getAllData(endPoints.users).then((data) => {
      dispatch(setUsers(data));
      console.log(data);
    });
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <h1 className="font-bold m-3 text-xl">Users</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-2">
              Id
            </th>
            <th scope="col" className="px-3 py-2">
              Username
            </th>
            <th scope="col" className="px-3 py-2">
              Full Name
            </th>
            <th scope="col" className="px-3 py-2">
              Email
            </th>
            <th scope="col" className="px-3 py-2">
              Delete
            </th>
            <th scope="col" className="px-3 py-2">
              Edit
            </th>
            <th scope="col" className="px-3 py-2">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-3 py-2">{elem.id}</td>
                <td className="px-3 py-2">{elem.username}</td>
                <td className="px-3 py-2">{elem.full_name}</td>
                <td className="px-3 py-2">{elem.email}</td>
                <td className="px-3 py-2">
                  <button
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={async () => {
                      await axios.delete(`${BASE_URL}${endPoints.users}${elem.id}`);
                      dispatch(deleteUser(elem.id));
                    }}
                    
                  >
                    Delete
                  </button>
                </td>
                <td className="px-3 py-2">
                  <Link to={`/edit`} className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                    Edit
                  </Link>
                </td>
                <td className="px-3 py-2">
                  <Link to={`/users/${elem.id}`}className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Detail
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
