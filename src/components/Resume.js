import React from "react";

function Resume() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <a href="objects/resume.pdf" download>
          Download my resume!
        </a>
        <embed
          style={{ width: "200%", height: "1000px" }}
          src="objects/resume.pdf"
          type="application/pdf"
        />
      </div>
    </div>
  );
}

export default Resume;