import React from "react";
import './TodoSearch.css';
function TodoSearch() {
    const [searchValue,setSearchValue]=React.useState('');
    const onSearchValueChange=event=>setSearchValue(event.target.value);
    return(
        <div>
            <input 
            className="TodoSearch"
            placeholder="Type to search"
            value={searchValue}
            onChange={onSearchValueChange}
            />
        {searchValue ?<p>Buscar: {searchValue}</p>:null}
        </div>
    );
}

export {TodoSearch};