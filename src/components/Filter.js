import React from "react";
import { useState } from "react";
function Filter({ search, onCategoryChange ,onSearchChange}) {
  
  function handleSearchChange(event) {
    onSearchChange(event.target.value)
  }
  
  return (
    <div className="Filter">
      <input value={search} type="text" name="search" 
      placeholder="Search..." onChange={handleSearchChange} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
