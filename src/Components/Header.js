import React from 'react'
import { 
  Button, Navbar, NavbarBrand, 
  NavbarCollapse, NavbarLink, 
  NavbarToggle }
   from "flowbite-react";
   import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar-wrapper">
      <Navbar fluid rounded className='border-b-2 border-purple'>
      <NavbarBrand href="#">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-purple ">QuizWiz</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="bg-purple"> <Link to ='/signup'>Get started</Link></Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active className='text-lg font-bold text-black-400'>
          <Link to ='/home'>Home</Link>
        </NavbarLink>
        <NavbarLink href="#" className='text-lg font-bold'>About</NavbarLink>
        <NavbarLink href="#" className='text-lg font-bold'>Quiz</NavbarLink>
        <NavbarLink href="#" className='text-lg font-bold'>Blog</NavbarLink>
        <NavbarLink href="#" className='text-lg font-bold'>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </div>
  );
}

export default Header;
