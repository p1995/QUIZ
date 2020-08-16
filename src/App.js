import React from "react";
// import CategoryDetails from "./Components/CategoryDetails";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
function App() {
  return (
    <div className="App bg-light">
      <Container>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </Container>
    </div>
  );
}

export default App;
