import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


const websiteCopy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis similique, facilis culpa neque optio atque mollitia ea molestiae tenetur, repellendus exercitationem delectus voluptatum a numquam repellat. Sapiente, est blanditiis.`;

const websiteTitle = `Amazing Web Developerererer!`;

function App() {
  return (
    <React.Fragment>
      <Header 
        title={websiteTitle}
      />
      <MainContent
        content={websiteCopy}
      />      
      <Footer />
    </React.Fragment>
  );
}

export default App;
