import React, { useState } from "react";
import { Form, Button, FormGroup, Badge } from "react-bootstrap";
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
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Form.Label>Name</Form.Label>
          <br />
          <input type="text" value={name} onChange={handleNameChange} />
        </FormGroup>
        <FormGroup>
          <Form.Label>Body</Form.Label>
          <br />
          <textarea
            value={body}
            onChange={handleBodyChange}
            rows="5"
            cols="22"
          ></textarea>
        </FormGroup>
        <Button type="submit" variant="outline-success" size="lg" active>
          save
        </Button>
      </Form>
    </div>
  );
};
export default QuotesForm;
