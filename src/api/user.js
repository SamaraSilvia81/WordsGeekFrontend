import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "gzRhZWVb8EIzxhyvj9ixjrBjv5hYqcEpZ2HqOJYA",
    "X-Parse-REST-API-Key": "CX4W388OoKPBOC60wvWAwWRLg5RFyr3HiPnaKLkF",
  },
});

export const getUsers = () =>
  instance
    .get("/UserGeek", {
      params: {
        keys: ["name", "password"]
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});

export const createUser = ({name,email,password}) => {
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Password:", password)
  return instance.post("/UserGeek", {
    name,
    email,
    password
  });
};