import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../../services";
import { endPoints } from "../../services/api";

const ProdDetail = () => {
  const [prod, setProd] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getDataById(endPoints.products, id).then((res) => {
      setProd(res);
    });
  }, [id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={prod.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {prod.title}
          </h5>
          <h2>{prod.price}</h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {prod.description}
          </p>
          <h3>{`Category: ${prod.category}`}</h3>
        </div>
      </div>
    </>
  );
};

export default ProdDetail;
