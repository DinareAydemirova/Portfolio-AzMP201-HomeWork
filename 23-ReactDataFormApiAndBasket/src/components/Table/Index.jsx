import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    return () => {
      axios("https://northwind.vercel.app/api/products").then((res) => {
        setData(res.data);
      });
    };
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>unitPrice</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => {
          return (
            <tr key={uuidv4()}>
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.unitPrice}</td>
              <td><Button variant="danger">Delete</Button></td>
              <td><Button variant="primary">Edit</Button></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DataTable;
