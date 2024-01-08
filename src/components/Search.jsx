import { useState } from "react";

export function SearchBar({ bookId }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryList, setSearchQueryList] = useState([]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  async function fetchTop10WordsWithPrefix() {
    try {
      if (searchQuery?.length > 2) {
        const response = await fetch(
          `https://localhost:7166/api/books/${bookId}/search/${searchQuery}`
        );
        const data = await response.json();
        setSearchQueryList(data);
      } else {
        setSearchQueryList("Please enter at least 3 characters");
      }
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  }

  return (
    <div className="searchBarBody">
      <p className="BookBodyTitleOne">Search Box</p>
      <div>
        <input
          type="text"
          placeholder="Enter three characters"
          onChange={(e) => handleSearch(e)}
        />
        <button onClick={fetchTop10WordsWithPrefix}>Search</button>
      </div>

      {Array.isArray(searchQueryList) ? (
        <div>
          <p>Searched Words are</p>
          {searchQueryList.length > 0 ? (
            searchQueryList?.map(
              (searchQueryElement) => `${searchQueryElement}, `
            )
          ) : (
            <p>No Words Found</p>
          )}
        </div>
      ) : (
        <p>{searchQueryList}</p>
      )}
    </div>
  );
}
