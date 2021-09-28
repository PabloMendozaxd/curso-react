import React from "react";
import './TodoSearch.css';
function TodoSearch({searchValue,setSearchValue}) {
    const onSearchValueChange=event=>setSearchValue(event.target.value);
    return(
        <div>
            <input 
            className="TodoSearch"
            placeholder="Type to search"
            value={searchValue}
            onChange={onSearchValueChange}
            />
            {searchValue&&<p>Buscar: {searchValue}</p>}
        </div>
    );
}
export {TodoSearch};