import React from "react";
import Home from "./Components/Home";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
function App() {
  return (
    <div className="App bg-light">
      <Container fluid>
        <Provider store={store}>
          <Home />
        </Provider>
      </Container>
    </div>
  );
}

export default App;
