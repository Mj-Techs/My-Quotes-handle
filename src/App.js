import React from "react";
import QuotesContainer from "./QuotesContainer";
import { Container } from "react-bootstrap";
const App = (props) => {
  return (
    <div>
      <Container>
        <h1
          style={{
            fontSize: "3.1rem",
            textAlign: "center",
          }}
        >
          Quotes Book
        </h1>
        <QuotesContainer />
      </Container>
    </div>
  );
};
export default App;
