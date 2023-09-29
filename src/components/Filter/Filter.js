
import React from "react";
import { useDispatch } from "react-redux";
import { FormStyled } from "./Filter.styled";
import { filterContacts } from "../../redux/filterSlice"

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FormStyled>
      <label>
        Find contacts by name
        <input
        type="text"
        name="name"
        onChange={handleFilterChange}
        ></input>
      </label>
    </FormStyled>
  );
};
