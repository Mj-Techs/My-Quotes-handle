import React, { useState, useEffect } from "react";
import QuotesList from "./QuotesList";
import QuotesForm from "./QuotesForm";
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
  return (
    <div>
      <QuotesList quotes={quotes} removeItem={removeItem} />
      <QuotesForm addQuote={addQuote} />
    </div>
  );
};
export default QuotesContainer;
