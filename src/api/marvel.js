import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "wUe5ymPhSMIALvnXc9uNawGWwQ0HTUCpXz6OcRxm",
    "X-Parse-REST-API-Key": "Q3YyqzCVUbvAcvWmbYBrKGVx0PPN3XgRk5hfscLC",
  },
});

export const getHeroes = () =>
  instance
    .get("Marvel", {
      params: {
        keys: ["name", "image"]
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});