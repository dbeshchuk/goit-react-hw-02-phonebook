import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ list, deleteItem }) => (
  <ul>
    {list.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button onClick={() => deleteItem(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

ContactItem.propTypes = {
  list: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ContactItem;
