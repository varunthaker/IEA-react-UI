import { useEffect, useState } from "react";
import { SearchBar } from "./Search";
export function BookWordsList({ bookId }) {
  const [bookTop10WordList, setBookTop10WordList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://localhost:7166/api/Book/${bookId}`
        );
        const data = await response.json();
        setBookTop10WordList(data);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchBooks();
  }, [bookId]);

  return (
    <div>
      <h5>Top 10 Words are</h5>
      {bookTop10WordList?.map((top10Words) => `${top10Words}, `)}
      <SearchBar bookId={bookId} />
    </div>
  );
}
