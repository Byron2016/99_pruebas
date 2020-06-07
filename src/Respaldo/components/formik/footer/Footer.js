import React from "react";
import "react-jsx-html-comments";

import "./styles.css";
import logFormik from "../../img/formik-mark.svg";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>inside footer</h1>
        <footer>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <section className="d-flex flex-column flex-md-row justify-content-around w-100 sitemap">
              <a href="#" className="nav-home">
                <img src={logFormik} alt="Formik" width="66" height="58"></img>
              </a>
            </section>
          </nav>
        </footer>
        <br />
        <br />
      </div>
    );
  }
}

export default Footer;
