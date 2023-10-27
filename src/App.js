// App.js
import React, { useState } from 'react';
import Header from './components/Header';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import SecondNav from './components/SecondNav';



// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";


function App() {
  const [content, setContent] = useState('projects');

  const handleNavigationClick = (page) => {
    setContent(page);
  };

  return (
    <NextUIProvider>
    <div>

      <Header  />
      <SecondNav  handleNavigationClick={handleNavigationClick}></SecondNav>
      <div  className='m-10 sm:m-20'>
      <main>
    
        {content === 'projects' && <Projects />}
        {content === 'about' && <About />}
        {content === 'contact' && <Contact />}
        {content === 'resume' && <Resume />}
      </main>
      </div>
      <Footer></Footer>
      
    </div>
    </NextUIProvider>
  );
}

export default App;