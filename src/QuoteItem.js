import React, { useState } from "react";
import Button from "@material-ui/core/Button";
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
          <Button onClick={handleToggle} variant="contained" color="primary">
            cancel
          </Button>
        </div>
      ) : (
        <div>
          <blockquote>
            {body} - {name}
          </blockquote>
          <Button onClick={handleToggle} variant="contained" color="primary">
            edit
          </Button>
          <Button onClick={handleRemove} variant="contained" color="primary">
            remove
          </Button>
        </div>
      )}
    </div>
  );
};
export default QuoteItem;
