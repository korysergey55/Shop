import React from "react";
import styles from "./FilterStyled.module.css";
import { connect } from "react-redux";
import { setFilter } from "../../redux/filter/filterActions";
import { filterSelector } from "../../redux/filter/filterSelectors";

const Filter = ({ filter, setFilter }) => {
 const onHandleChange = (event) => {
  setFilter(event.target.value);
 };
 return (
  <label className={styles.filterLabel}>
   Find goods
   <input
    className={styles.filterInput}
    type="text"
    value={filter}
    onChange={onHandleChange}
    placeholder="Enter model heare"
   />
  </label>
 );
};

const mapStateToProps = (state, ownProps) => ({
 filter: filterSelector(state),
});

const mapDispatchToProps = {
 setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
