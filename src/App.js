import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <>
      <main>
      <Navbar />
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact /> 
      </main>
    </>
  );
}

export default App;
