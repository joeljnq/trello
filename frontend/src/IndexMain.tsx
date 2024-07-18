import React from "react";
import './assets/css/indexMain.css'
const indexMain: React.FC = () => {
  return (
    <div id="wrapper">
      <div>
        <h2>Trello unifica tus atareas, compañeros de equipo y herramientas</h2>
        <p>Mantelo todo en el mismo lugar auqnue tu equipo no lo esté</p>
        <form>
            <input type="email" placeholder="Correo electrónico"></input>
            <button type="submit">Registrate, ¡es gratis!</button>       
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default indexMain;
