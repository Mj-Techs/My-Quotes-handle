import React from "react";
const QuoteItem = (props) => {
  const { id, name, body, removeItem } = props;
  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      removeItem(id);
    }
  };
  return (
    <div>
      <blockquote>
        {body} - {name}
      </blockquote>
      <button>edit</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
};
export default QuoteItem;
