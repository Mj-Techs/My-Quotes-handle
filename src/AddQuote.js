import React from "react";
import { Badge } from "react-bootstrap";
import QuotesForm from "./QuotesForm";
// import { Card } from "react-bootstrap";
const AddQuote = (props) => {
  const { addItem } = props;
  const formSubmission = (formData) => {
    addItem(formData);
  };
  return (
    <div>
      <h2>
        <Badge variant="primary">Add Quote</Badge>
      </h2>
      <QuotesForm formSubmission={formSubmission} />
    </div>
  );
};
export default AddQuote;
