const { log } = require("console");
const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.json());

let users = [
  
    {
      "id": "2",
      "userName": "dinara",
      "name": "dinara",
      "surname": "aydamirova",
      "password": "123Ad",
      "email": "mail.com",
      "registeredDate": "2024-05-04T12:00:00Z",
      "isAdmin": false,
      "gender": "femele",
      "balence": 600,
      "basket": [],
      "favorites": []
    },
    {
      "id": "3",
      "userName": "gulçin",
      "name": "gulçin",
      "surname": "isgenderove",
      "password": "123",
      "email": "mail.com",
      "registeredDate": "2024-05-04T12:00:00Z",
      "isAdmin": false,
      "gender": "femele",
      "balence": 400,
      "basket": [],
      "favorites": []
    },
    {
      "id": "4",
      "userName": "yaqub",
      "name": "yaqub",
      "surname": "hacili",
      "password": "123",
      "email": "mail.com",
      "registeredDate": "2024-05-04T12:00:00Z",
      "isAdmin": true,
      "gender": "male",
      "balence": 500,
      "basket": [],
      "favorites": []
    },
    {
      "id": "5",
      "userName": "shahnaz",
      "name": "shahnaz",
      "surname": "rustemli",
      "password": "123",
      "email": "mail.com",
      "registeredDate": "2024-05-04T12:00:00Z",
      "isAdmin": false,
      "gender": "femele",
      "balence": 400,
      "basket": [],
      "favorites": []
    },
    {
      "id": "10743648-cc9c-4e96-b9c8-274a443df747",
      "userName": "dilara123",
      "name": "dilara",
      "surname": "aydamirova",
      "password": "1235da",
      "email": "dilara@gmail.com",
      "registeredDate": "2024-05-04T12:00:00Z",
      "isAdmin": true,
      "gender": "femele",
      "balence": 250
    },
    {
      "id": "9b619238-88f7-465a-a024-a87a351873d2",
      "userName": "gdfg",
      "name": "Hhbdus",
      "surname": "Dsdfsdf",
      "password": "dsfsdr4343qS",
      "email": "dinaraaydamirova@gmail.com",
      "registeredDate": "2024-05-21T16:53",
      "isAdmin": true
    },
];

app.get("/", (req, res) => {
  res.send(arr);
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  let findElem = arr.find((elem) => elem.id == req.params.id);
  // console.log(findElem);
  res.send(findElem);
});

app.delete("/:id", (req, res) => {
  // console.log(req.params.id);
  let findElems = arr.find((elem) => elem.id != req.params.id);
  // console.log(findElems);
  res.send(findElems);
});
app.post("/", (req, res) => {
  console.log(req.body);
  arr.push(req.body);
  res.send("post olundu");
});

app.put("/:id", (req, res) => {
  let id = req.params.id;
  let obj = req.body;

  let elem = arr.findIndex((elem) => elem.id == id);
  //   console.log(elem);

  arr[elem] = { id: id, ...obj };
  res.send(arr);
});
app.patch("/:id", (req, res) => {
  let id = req.params.id;
  let obj = req.body;

  let elemIndex = arr.findIndex((elem) => elem.id == id);
  let elem = arr.find((elem) => elem.id == id);
  //   console.log(elem);

  arr[elemIndex] = { ...elem, ...obj };
  res.send(arr);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
