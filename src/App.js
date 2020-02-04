import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Nav from './Nav';

const websiteCopy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis similique, facilis culpa neque optio atque mollitia ea molestiae tenetur, repellendus exercitationem delectus voluptatum a numquam repellat. Sapiente, est blanditiis.`;

const websiteTitle = `Amazing Web Developerererer!`;

const linkNames = [
  'Home',
  'Portfolio',
  'Cat Pictures',
  'Potent Potables',
  'Contact'
];

function App() {
  return (
    <div className="container-fluid">
      <Header 
        title={websiteTitle}
      />
      <Nav 
        links={linkNames}
      />
      <MainContent
        content={websiteCopy}
      />      
      <Footer />
    </div>
  );
}

export default App;
