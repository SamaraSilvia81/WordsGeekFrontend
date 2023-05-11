import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "9SCYmtYm5slm1yzgDd5h6jYj2dMKYl9CS4iXbVdr",
    "X-Parse-REST-API-Key": "WXqt4ZthCDCcnnI2PJoDOOtQHpzk3bRXLxk1gm0P",
  },
});

{/*export const getHeroes = () => instance.get("Marvel").then((res) => {
  console.log("MeusDados:", res.data);
  return res.data;
});*/}

export const getHeroes = () =>
  instance
    .get("Marvel", {
      params: {
        keys: "name, image",
      },
    })
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data.results;
});