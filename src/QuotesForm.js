import React, { useState } from "react";
import { v4 } from "uuid";

const QuotesForm = (props) => {
  const {
    formSubmission,
    id: SNo,
    name: author,
    body: quote,
    handleToggle,
  } = props;
  const [name, setName] = useState(author ? author : "");
  const [body, setBody] = useState(quote ? quote : "");
  const [id, setId] = useState(SNo ? SNo : v4());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0 && body.length > 0) {
      const formData = {
        id: id,
        name: name,
        body: body,
      };
      // updating state value of parent.
      formSubmission(formData);
    }

    // reset form
    if (handleToggle) {
      handleToggle();
    }
    setName("");
    setBody("");
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input type="text" value={name} onChange={handleNameChange} />
        <br />
        <label>Body</label>
        <br />
        <textarea value={body} onChange={handleBodyChange}></textarea>
        <br />
        <input type="submit" value="save" />
        <br />
      </form>
    </div>
  );
};
export default QuotesForm;
