import "./App.css";
import { useEffect, useState } from "react";
import { Book } from "./components/Book";

function App() {
  const [booksInfo, setBooksInfo] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://localhost:7166/api/Book");
        const data = await response.json();
        setBooksInfo(data);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h3>List of Books</h3>
      {booksInfo?.map((bookInfo, idx) => {
        return (
          <Book key={idx} bookTitle={bookInfo.title} bookId={bookInfo.id} />
        );
      })}
    </>
  );
}

export default App;
