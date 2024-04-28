import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import style from "./style.module.css";
import FormData from './formData/Index'
import Sort from "./sort/Index";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    return () => {
      axios("https://northwind.vercel.app/api/products").then((res) => {
        setData(res.data);
      });
    };
  }, []);

  const Edit = (id, newName, newUnitPrice) => {
    axios.patch(`https://northwind.vercel.app/api/products/${id}`, {
        name: newName,
        unitPrice: newUnitPrice,
      })
      .then(() => {
        const newData = data.map((elem) => {
          if (elem.id === id) {
            return { ...elem, name: newName, unitPrice: newUnitPrice };
          }
          return elem;
        });
        setData(newData);
      });
  };

  return (
    <>
    <FormData setData={setData} data={data}/>
    <Sort data={data} setData={setData}/>

    <Table striped bordered hover className={style.table}>
      <thead>
        <tr>
          <th className={style.headings}>ID</th>
          <th className={style.headings}>Name</th>
          <th className={style.headings}>Unit Price</th>
          <th className={style.headings}>Delete</th>
          <th className={style.headings}>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => {
          return (
            <tr key={uuidv4()}>
              <td className={style.datas}>{elem.id}</td>
              <td className={style.datas}>{elem.name}</td>
              <td className={style.datas}>{elem.unitPrice}</td>
              <td className={style.datas}>
                <Button
                  className={style.del}
                  onClick={() => {
                    let arr = data.filter((e) => e.id != elem.id);
                    setData(arr);
                    axios.delete(
                      `https://northwind.vercel.app/api/products/${elem.id}`
                    );
                  }}
                >
                  Delete
                </Button>
              </td>
              <td className={style.datas}>
                <Button
                  className={style.edit}
                  onClick={() => {
                    const newName = prompt("Edit name", elem.name);
                    const newUnitPrice = prompt(
                      "Edit unit price",
                      elem.unitPrice
                    );
                    if (newName !== null && newUnitPrice !== null) {
                      Edit(elem.id, newName, newUnitPrice);
                    }
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </>
  );
};

export default DataTable;