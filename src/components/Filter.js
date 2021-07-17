import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, change }) => (
  <label>
    Find contacts by name:
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={change}
      className="filter-input"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  change: PropTypes.func.isRequired,
};

export default Filter;
