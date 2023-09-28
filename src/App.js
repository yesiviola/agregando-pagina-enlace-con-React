 import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  const pageTitle = "Mi Aplicacion React";
  const nextULink ="https://www.nextu.com/";
  return (
    <div>
      <h1>{pageTitle}</h1>
      <p>Nextu es una plataforma educativa en linea que ofrece una amplia gama de cursos y programas diseñados para desarrollar habilidades digitales y empresariales.</p>
      <a href ={nextULink}target ="_blank" rel="noopener noreferrer">Ir a enlace a Nextu</a>
      </div>
  );
}
ReactDOM.render (<App/>, document.getElementById('root'));

export default App;
