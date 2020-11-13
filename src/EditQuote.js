import React from "react";
import QuotesForm from "./QuotesForm";

const EditQuote = (props) => {
  const { id, name, body, editQuote, handleToggle } = props;
  const formSubmission = (formData) => {
    editQuote(formData);
  };
  return (
    <div>
      <h2>Edit Your Quote</h2>
      <QuotesForm
        id={id}
        name={name}
        body={body}
        formSubmission={formSubmission}
        handleToggle={handleToggle}
      />
    </div>
  );
};
export default EditQuote;
