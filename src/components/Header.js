import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

function Header({ handleNavigationClick }) {
  const headerStyle = {
    position: "sticky",
    top: "0",
    zIndex: "10",
  };

  return (
    <div style={headerStyle}>
      <Navbar className="pt-10 pb-10 border-b ">
        <NavbarBrand>
          <img
            src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/elisalogo.3danimation+(1).gif"
            alt="Your GIF"
            className="w-1/2 display-block"
          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default Header;
