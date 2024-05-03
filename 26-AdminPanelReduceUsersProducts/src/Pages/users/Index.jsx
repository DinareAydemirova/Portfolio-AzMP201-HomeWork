/** @format */

import React, { useEffect, useState } from "react";
import { getAllData } from "../../services";
import { BASE_URL, endPoints } from "../../services/api";
import axios from "axios";

const Users = ({ state, dispatch }) => {
  const [sortType, setSortType] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllData(endPoints.users).then((data) => {
      dispatch({
        type: "SetUsers",
        users: data,
      });
    });
    // console.log(state.users);
  }, []);

  const filterUsers = () => {
    let filteredUsers = state.users;

    if (sortType === "a-z") {
      filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "z-a") {
      filteredUsers.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filteredProducts;
  };

  const handleSort = (type) => {
    setSortType(type);
  };
  return (
    <div className="relative overflow-x-auto">
      <div className=" my-3">
        <button
          type="button"
          className="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
          onClick={() => handleSort("a-z")}
        >
          A-Z
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-500 dark:hover:bg-indigo-500 dark:focus:ring-indigo-500"
          onClick={() => handleSort("z-a")}
        >
          Z-A
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              user name
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              surname
            </th>
            <th scope="col" className="px-6 py-3">
              password
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              isAdmin
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {state.users?.map((elem) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{elem.id}</td>
                <td className="px-6 py-4">{elem.userName}</td>
                <td className="px-6 py-4">{elem.name}</td>
                <td className="px-6 py-4">{elem.surname}</td>
                <td className="px-6 py-4">{elem.password}</td>
                <td className="px-6 py-4">{elem.email}</td>
                <td className="px-6 py-4">{elem.isAdmin}</td>
                <td className="px-6 py-4 ">
                  <button
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => {
                      let arr = state.users.filter((e) => e.id !== elem.id);
                      setData([...arr]);
                      axios.delete(`${BASE_URL + endPoints.users + elem.id}`);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4 ">
                  <button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Edit
                  </button>
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
