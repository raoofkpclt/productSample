import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Product from "./component/products/product";
import {Container} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Container>
      <Product />
      </Container>
  
    </div>
  );
}

export default App;
