import React from "react";

function About() {
  return (
    <div className="flex flex-col sm:flex-row ">
      <div className="flex-1">
      <div className="flex flex-col mt-40">
        <img
          src={
            "https://portfolio-elisa-2023.s3.eu-west-1.amazonaws.com/ezgif.com-gif-maker.gif"
          }
          alt="Your GIF"
        />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-10">
          <p className="font-bold text-3xl">About</p>

          <p>
            I am a full-stack programmer from Iceland.I graduated from my
            bachelors in software engineering from University of Iceland in June
            2023, after taking my last semester abroad in Madrid.
          </p>
          <h1>Fields of interest</h1>
          <p>
            During my time studying my degree, it quickly became clear that my
            interests were more in the creative and artistic side of computer
            industry . I found myself drawn to front end design and programming,
            along with computer grafics. I also gained a lot of interest in data
            analization and visualisation after implementing a visual solution
            for a startup last summer.
          </p>
          <h1>Entreupreneurship</h1>
          <p>
            The entreupreneurial side of the software industry is also something
            i have gained much interest in, after working for startups. My
            startup idea inkUp is a platform that strives to connect tattoo
            artists and clients, with its goal to make the tattoo industry less
            underground thus benifitting both seller and buyer. In university, I
            got the chance to pitch inkUp in front of investors and powerful
            people in Iceland´s tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
