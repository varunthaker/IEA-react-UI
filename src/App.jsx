import "./App.css";
import { useEffect, useState } from "react";
import { Book } from "./components/Book";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("./books.json");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h3>List of Books</h3>
      {books?.map((book, idx) => {
        return <Book key={idx} book={book} />;
      })}
    </>
  );
}

export default App;
