import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const QuotesForm = (props) => {
  const { addQuote } = props;
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0 && body.length > 0) {
      const formData = {
        id: uuidv4(),
        name: name,
        body: body,
      };
      // updating state value of parent.
      addQuote(formData);
    }

    // reset form
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
