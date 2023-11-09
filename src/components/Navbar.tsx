import logo from "../assets/logo.png";
import Hamburger from "./Hamburger";
import NavScript from "../hooks/NavScript";

const Navbar = () => {
  return (
    <>
      <NavScript />
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              style={{
                width: "25vh",
                height: "7vh",
                minWidth: "125px",
                minHeight: "35px",
              }}
              src={logo}
              alt="FilmList"
            />
          </a>

          <Hamburger />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Filter
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LogIn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SignUp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
