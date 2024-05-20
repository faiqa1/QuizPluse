import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar-wrapper">
      <Navbar fluid rounded className="border-b-2 border-purple bg-purple text-white">
        <NavbarBrand href="#">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl text-white font-bold ">
            QuizWiz
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button className="text-white text-2xl">
            {" "}
            <Link to="/signup" className="text-l text-white font-bold">Get started</Link>
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink
            href="#"
            active
            className="text-lg font-bold text-black-400"
          >
            <Link to="/home">Home</Link>
          </NavbarLink>
          <NavbarLink href="#" className="text-lg font-bold">
           <Link to ='/'> About </Link>
          </NavbarLink>
          <NavbarLink href="#" className="text-lg font-bold">
            Quiz
          </NavbarLink>
          <NavbarLink href="#" className="text-lg font-bold">
            Blog
          </NavbarLink>
          <NavbarLink href="#" className="text-lg font-bold">
            How it Works
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default Header;
