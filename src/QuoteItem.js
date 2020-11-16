import React, { useState } from "react";
import { Button, Badge } from "react-bootstrap";

import EditQuote from "./EditQuote";
const QuoteItem = (props) => {
  const { id, name, body, removeItem, editQuote } = props;
  const [toggle, setToggle] = useState(false);
  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      removeItem(id);
    }
  };
  const handleToggle = () => {
    const result = !toggle;
    setToggle(result);
  };
  return (
    <div>
      {toggle ? (
        <div>
          <EditQuote
            id={id}
            name={name}
            body={body}
            editQuote={editQuote}
            handleToggle={handleToggle}
          />
          <Button onClick={handleToggle} variant="danger">
            <Badge>cancel</Badge>
          </Button>
        </div>
      ) : (
        <div>
          <h4>
            <Badge variant="secondary">
              {body} - {name}
            </Badge>
          </h4>

          <Button
            onClick={handleToggle}
            variant="outline-success"
            active
            size="sm"
          >
            edit
          </Button>
          <Button
            onClick={handleRemove}
            variant="outline-danger"
            active
            size="sm"
          >
            remove
          </Button>
        </div>
      )}
    </div>
  );
};
export default QuoteItem;
