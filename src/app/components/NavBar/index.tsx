"use client";
import { ContainerNavBar, SectionLogo } from "./styles";
import logo from "../../assets/logo.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <ContainerNavBar>
      <SectionLogo>
        <Image src={logo} alt="logo" />
      </SectionLogo>
    </ContainerNavBar>
  );
};

export default NavBar;
