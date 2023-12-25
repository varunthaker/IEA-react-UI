import { Fragment, useState } from "react";

export function SearchBar({ listToSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryList, setSearchQueryList] = useState([]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function handleSearchSubmit() {
    if (searchQuery?.length > 2) {
      const topTenWordsStartWithsearchQuery = listToSearch.filter((word) =>
        word.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setSearchQueryList(topTenWordsStartWithsearchQuery);
    } else {
      setSearchQueryList("Please enter the String with atleast 3 Charecters");
    }
  }

  return (
    <Fragment>
      <div>
        <input
          type="text"
          placeholder="Enter three Char"
          onChange={(e) => handleSearch(e)}
        />
        <button onClick={handleSearchSubmit}>Search</button>
      </div>

      {typeof searchQueryList !== "string" ? (
        <div>
          <p>Searched Words are</p>
          {searchQueryList.map((searchQueryElement, idx) => {
            return <p key={idx}>{`${searchQueryElement}, `}</p>;
          })}
        </div>
      ) : (
        <p>{searchQueryList}</p>
      )}
    </Fragment>
  );
}
