import React, { useCallback, useEffect, useState } from 'react';
import Search from "./common/Search";

const SearchBarExample = () => {
    const fruitsList = ["Apple", "Orange", "lemon", "banana", "avacado"];
    const [filteredList, setFilteredList] = useState(fruitsList);
    
    const handleSearchClick = (searchKeyword) => {
        setFilteredList(filteredList.filter(item => item.toLowerCase().includes(searchKeyword.toLowerCase())));
    };
    return (
        <div>
            <Search handleSearchClick={handleSearchClick}/>
            {filteredList.map((item) => <li key={item}>{item}</li>)}
        </div>
    )
}

export default SearchBarExample
