import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "@mui/material/Container";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';
import SignUp_In from './pages/SignUp_In';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Container>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>

       <Route exact path="/signup_in">
         <SignUp_In/>
       </Route>
       
     </Switch>
     </Container>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
