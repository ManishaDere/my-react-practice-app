import React, { useState } from "react";

const Search = ({ handleSearchClick }) => {
    const [searchInputVal, setSearchInputVal] = useState("");
    const [disableBtn, setDisableBtn] = useState(false);
    const handleInputChange = (e) => {
        setSearchInputVal(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // e.currentTarget.disabled = true;
        setDisableBtn(!disableBtn);
        console.log("handle submit clicked");
        handleSearchClick(searchInputVal);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search Fruit you like:</label>
            <input id="search" type="text" value={searchInputVal} onChange={(e) => handleInputChange(e)}/>
            <button className={disableBtn ? "disable-submit" : ""} type="submit">Search</button>
        </form>
    )
};

export default Search;