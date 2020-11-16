import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";
const QuotesContainer = (props) => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(result);
  }, []);
  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);
  const addQuote = (quote) => {
    const result = [quote, ...quotes];
    setQuotes(result);
  };
  const removeItem = (id) => {
    const filteredQuotes = quotes.filter((quote) => quote.id !== id);
    setQuotes(filteredQuotes);
  };
  const editQuote = (quote) => {
    const result = quotes.map((q) => {
      if (q.id === quote.id) {
        return { ...q, ...quote };
      } else {
        return { ...q };
      }
    });
    setQuotes(result);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <QuotesList
              quotes={quotes}
              removeItem={removeItem}
              editQuote={editQuote}
            />
          </Col>
          <Col sm={2}>
            <AddQuote addItem={addQuote} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default QuotesContainer;
