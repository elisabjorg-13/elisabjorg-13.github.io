import React from "react";

function Footer() {
  return (
    <div className="">

   
    <div id="footer" className="relative w-full h-screen">
      <img
        src="https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/gif101.gif"
        alt="Your GIF"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <p className="text-white text-3xl ">davidsson.elisa@gmail.com</p>
        <p className="text-white text-3xl ">+354 6616820</p>
        <p className="text-white text-3xl ">@elisabiorg</p>
      </div>
    </div>
    </div>
  );
}

export default Footer;
