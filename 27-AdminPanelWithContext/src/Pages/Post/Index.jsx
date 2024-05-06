import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, endPoints } from "../../services/api";
import { v4 as uuidv4 } from "uuid";

const Post = () => {
  const [inputValues, setInputValues] = useState({
    image: "",
    title: "",
    price: "",
    category: "",

    rating: {
      rate: "",
      count: "",
    },
  });
  const [usersValues, setUsersValues] = useState({
    id: "",
    userName: "",
    name: "",
    surname: "",
    password: "",
    email: "",
    registeredDate: "",
    isAdmin: false,
  });

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        class="max-w-sm mx-auto mt-12  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select what to post</option>
        <option value="postProduct">Post Product</option>
        <option value="postUsers">Post Users</option>
      </select>

      {selectedOption === "postProduct" && (
        <form className="w-9/12 mt-20">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Image
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                value={inputValues.image}
                type="text"
                onChange={(e) => {
                  setInputValues({ ...inputValues, image: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Title
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={inputValues.title}
                onChange={(e) => {
                  setInputValues({ ...inputValues, title: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Price
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={inputValues.price}
                onChange={(e) => {
                  if (
                    !isNaN(parseFloat(e.target.value)) ||
                    e.target.value === ""
                  ) {
                    setInputValues({ ...inputValues, price: e.target.value });
                  }
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Category
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={inputValues.category}
                onChange={(e) => {
                  setInputValues({ ...inputValues, category: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Rate
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={inputValues.rating.rate}
                onChange={(e) => {
                  if (
                    !isNaN(parseFloat(e.target.value)) ||
                    e.target.value === ""
                  ) {
                    setInputValues({
                      ...inputValues,
                      rating: {
                        ...inputValues.rating,
                        rate: e.target.value,
                      },
                    });
                  }
                }}
                
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Count
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="number"
                value={inputValues.rating.count}
                onChange={(e) => {
                  if (
                    !isNaN(parseFloat(e.target.value)) ||
                    e.target.value === ""
                  ) {
                    setInputValues({
                      ...inputValues,
                      rating: {
                        ...inputValues.rating,
                        count: e.target.value,
                      },
                    });
                  }
                }}
                
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  axios.post(BASE_URL + endPoints.products, inputValues);
                  setInputValues({
                    image: "",
                    title: "",
                    price: "",
                    category: "",

                    rating: {
                      rate: "",
                      count: "",
                    },
                  });
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}

      {selectedOption === "postUsers" && (
        <form className="w-9/12 mt-20">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Username
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                value={usersValues.userName}
                type="text"
                onChange={(e) => {
                  setUsersValues({ ...usersValues, userName: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={usersValues.name}
                onChange={(e) => {
                  setUsersValues({ ...usersValues, name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Surname
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={usersValues.surname}
                onChange={(e) => {
                  setUsersValues({ ...usersValues, surname: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
                value={usersValues.password}
                onChange={(e) => {
                  setUsersValues({
                    ...usersValues,
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                type="text"
                value={usersValues.email}
                onChange={(e) => {
                  setUsersValues({
                    ...usersValues,
                    email: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-email"
              >
                Registered Date
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                type="datetime-local"
                value={usersValues.registeredDate}
                onChange={(e) => {
                  setUsersValues({
                    ...usersValues,
                    registeredDate: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <input
                id="default-checkbox"
                type="checkbox"
                checked={usersValues.isAdmin}
                onChange={(e) => {
                  setUsersValues({
                    ...usersValues,
                    isAdmin: e.target.checked,
                  });
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                isAdmins
              </label>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const id = uuidv4();

                  axios.post(BASE_URL + endPoints.users, {
                    ...usersValues,
                    id: id,
                  });

                  setUsersValues({
                    userName: "",
                    name: "",
                    surname: "",
                    password: "",
                    email: "",
                    isAdmin: false,
                  });
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Post;
