import React from "react";
import { NavLink } from "react-router-dom";

function MenuFormulaire() {
  // const [active,setActive]= useState(false)
//   let menuItem_ = "list-group-item";
  return (
    <div className="container m-formulaire">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="Ouverture">Ouverture</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/">Permis</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/">Accreditation</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuFormulaire;
