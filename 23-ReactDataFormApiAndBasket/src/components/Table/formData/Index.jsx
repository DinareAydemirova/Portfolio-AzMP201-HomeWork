import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import style from "./style.module.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function FormExample({ setData, data }) {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let obj = {
      id: uuidv4(),
      name: name,
      unitPrice: unitPrice,
    };
    axios
      .post("https://northwind.vercel.app/api/products", obj)
      .then((response) => {
        console.log("Product added successfully:", response.data);

        setName("");
        setUnitPrice("");
        setData([...data, obj])
      });
  };

  return (
    <Form noValidate onSubmit={handleSubmit} className={style.form}>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label className={style.label}>Name</Form.Label>
        <Form.Control
          className={style.input}
          required
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label className={style.label}>Unit Price</Form.Label>
        <Form.Control
          className={style.input}
          required
          type="text"
          placeholder="Unit Price"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a unit price.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className={style.add}>
        Add
      </Button>
    </Form>
  );
}

export default FormExample;
