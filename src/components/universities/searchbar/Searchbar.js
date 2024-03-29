import React, { useState } from "react";
import "./searchbar.css";
import {AiOutlineSearch} from 'react-icons/ai';
import {TiDelete} from 'react-icons/ti';

function Searchbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="mysearch">
      <div className="mysearchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="mysearchIcon">
          {filteredData.length === 0 ? (
            <AiOutlineSearch />
          ) : (
            <TiDelete id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="mydataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="mydataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
