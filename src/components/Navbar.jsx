import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">AraAra</span>
        <div className="nav-link">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="about" className="nav-link">
            About
          </NavLink>
          <NavLink to="newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
