import React from 'react';

function SecondNav({ handleNavigationClick }) {
  const headerStyle = {
    padding:'30px',
    borderBottom: '1px solid',
  };

  return (
    <div style={headerStyle}>
      <div className="flex flex-row justify-center items-center">
        <div className="sm:flex gap-10 justify-between">
    
          <div>
            <a href="#projects" onClick={() => handleNavigationClick('projects')}>
              Projects
            </a>
          </div>
          <div>
            <a href="#about" onClick={() => handleNavigationClick('about')}>
              About
            </a>
          </div>
          <div>
            <a href="#footer">
              Contact
            </a>
          </div>
          <div>
            <a href="#resume" onClick={() => handleNavigationClick('resume')}>
              Resume
            </a>
          </div>
 
        </div>

      </div>
    </div>
  );
}

export default SecondNav;
