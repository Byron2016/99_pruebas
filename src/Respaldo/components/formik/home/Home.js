import React from "react";

import Footer from "../footer/Footer"; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial)
import "react-jsx-html-comments";

class Home extends React.Component {
  render() {
    return (
      
      <div className="App">
        <div className="container">
          <h1>
            Inside home.js
          </h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
