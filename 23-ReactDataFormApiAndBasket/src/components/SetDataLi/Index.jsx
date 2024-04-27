import React, { useEffect } from "react";

const SetDataLi = ({ data, datas, setDatas }) => {

  useEffect(() => {
    return () => {
      console.log("data silindi");
    };
  }, []);

  return (
    <li>
      {data.data}{" "}
      <button
        onClick={() => {
          let arr = datas.filter((elem) => elem.id != data.id);
          setDatas(arr);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default SetDataLi;
