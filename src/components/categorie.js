import React from "react";
import axios from "axios";

const allcategorie = async () => {
  await axios
    .get("http://localhost:3001/app/sace/categorie")
    .then((response) => {
      //   console.log(response.data);
      // this.setState({ Etablissements: response.data });
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function categorie() {
  const all_categorie = allcategorie();  
  return <div all_categorie={all_categorie}></div>;
}

export default categorie;
