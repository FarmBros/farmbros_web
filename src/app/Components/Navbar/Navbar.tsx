import { MdLogin } from "react-icons/md";
import FarmBrosButton from "../FarmbrosButton/FarmBrosButton";
import "./Navbar.scss"
import farmbroslogo from '../../assets/images/farmbros-logo-white-outline.png'
import Link from "next/link";
import React from 'react'
import Image from "next/image"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="navbar">
      <Image className="farmbros-logo" src={farmbroslogo as unknown as string} alt="" />
      <Navlinks />
      <AuthenticationLinks/>
    </header>
  );
}

export default Navbar

function Navlinks() {
  return (
    <nav className="navlinks">
      <Link href="/">
        Home
      </Link>
      <Link href="/">About</Link>
      <Link href="/">Case Studies</Link>
      <Link href="/">Contacts</Link>
    </nav>
  );
}

function AuthenticationLinks() {
  return (
    <>
      <Link href='/login' className="login-link">
        Login
      </Link>
    </>
  )
}