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
      <Navbar className="flex flex-row justify-between pt-10 pb-10 border-b">
        <NavbarContent className="d-flex justify-content-between align-items-center w-100">
        <div>
          <img
            src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/elisalogo.3danimation+(1).gif"
            alt="Your GIF"
           
          />
        </div>
        <div className="flex flex-row flex-end">
          <Link href="mailto:davidsson.elisa@gmail.com">
            <img
              src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/images/elisa.mailsymb.png"
              alt="Image 2"
              className="w-1/2 "
            />
          </Link>

          <Link href="https://www.linkedin.com/in/elisa-bj%C3%B6rg-tryggvad%C3%B3ttir-b01404276/">
            <img
              src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/images/elisa.linkedinsymb.png"
              alt="Image 2"
              className="w-1/2"
            />
          </Link>
        </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
}

export default Header;
