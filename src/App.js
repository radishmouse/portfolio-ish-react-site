import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Nav from './Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const websiteCopy = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis similique, facilis culpa neque optio atque mollitia ea molestiae tenetur, repellendus exercitationem delectus voluptatum a numquam repellat. Sapiente, est blanditiis.`;

const websiteTitle = `Amazing Web Developerererer!`;

const linkNames = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Blog',
    path: '/blog'
  }
];

function App() {
  return (
    <Router>
      <Nav 
        links={linkNames}
      />

      <Switch>
        <Route path="/blog/list">
          <BlogList />
        </Route>        
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h1>You are Home</h1>;
}

function Blog() {
  return <h1>You are on the blog!</h1>
}

function BlogList() {
  return <p>This is the blog list</p>
}

export default App;
