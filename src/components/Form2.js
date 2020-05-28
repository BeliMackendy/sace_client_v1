import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Form2 = ({ setCurrentform, currentform }) => {
  const [postcategorie, setPostcategorie] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/app/sace/categorie")
      .then((res) => {
        // console.log(res.data);
        setPostcategorie(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  

  return (
    <Fragment>
      <div className="container">
        <form className="form">
          <div
            style={{
              backgroundColor: "#ADD8E6",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "20px",
              paddingLeft: "10px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
          >
            Etape 2: Identification de l'établissement scolaire
          </div>

          <div className="form-group">
            <label>Dénomination de l'établissement</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Adresse</label>
              <input type="text" class="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Section communale/localité </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Ville/Commune</label>
              <input type="text" class="form-control" />
            </div>
            <div className="form-group col-md-4">
              <label>Tel</label>
              <input type="text" class="form-control" />
            </div>
            <div className="form-group col-md-4">
              <label>Email</label>
              <input type="email" class="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label>Catégorie</label>
            <select className="form-control">
              <option selected>Selectionner Catégorie</option>
              {postcategorie.map((post) => (
                <option key={post.Idcategorie} value={post.Idcategorie}>
                  {post.Libelle_Categorie}
                </option>
              ))}
            </select>
          </div>          
        </form>
      </div>
      <button onClick={(e) => setCurrentform(currentform - 1)}>
        precedent
      </button>
      <button onClick={(e) => setCurrentform(currentform + 1)}>suivant</button>
    </Fragment>
  );
};

export default Form2;
