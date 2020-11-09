import React from "react";
import QuoteItem from "./QuoteItem";
const QuotesList = (props) => {
  const { quotes, removeItem } = props;
  return (
    <div>
      {quotes.length === 0 ? (
        <div>
          <h1>No quotes found</h1>
          <p>Add your first quote</p>
        </div>
      ) : (
        <h1>My quote - {quotes.length}</h1>
      )}
      {quotes.map((quote) => {
        return <QuoteItem key={quote.id} {...quote} removeItem={removeItem} />;
      })}
    </div>
  );
};
export default QuotesList;
