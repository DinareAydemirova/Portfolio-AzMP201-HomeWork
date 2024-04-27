import React, { useState } from "react";
import style from "./style.module.css";

const Sort = ({ data, setData }) => {
  const [search, setSearch] = useState("");

  return (
    <div className={style.sortMethods}>

      <div>
        <button className={style.nameSort} onClick={()=>{
            const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
            setData(sortedData);
        }}>A-Z</button>

        <button className={style.nameSort} onClick={()=>{
             const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
             setData(sortedData);
        }}>Z-A</button>




      </div>
      <div>
        <button className={style.priceSort} onClick={()=>{
             const sortedData = [...data].sort((a, b) => b.unitPrice - a.unitPrice);
             setData(sortedData);
        }}>High to low</button>
        
        <button className={style.priceSort} onClick={()=>{
             const sortedData = [...data].sort((a, b) => a.unitPrice - b.unitPrice);
             setData(sortedData);
        }}>Low to high</button>



      </div>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          className={style.searchInp}
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value);
          }}
        />
        <button className={style.priceSort} onClick={()=>{
             const filteredData = data.filter((item) =>
             item.name.toLowerCase().includes(search.toLowerCase())
           );
           setData(filteredData);
        }}>Search</button>
      </div>
    </div>
  );
};

export default Sort;
