import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";

function Header() {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="font-bold tewxt-2xl text-primary ml-3">AI Web Story</h2>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
