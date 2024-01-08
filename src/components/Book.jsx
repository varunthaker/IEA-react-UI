import { BookWordsList } from "./BookWordsList";
import { useState } from "react";
import "../Book.css";

export function Book({ bookTitle, bookId }) {
  const [selectedBooks, setSelectedBooks] = useState({});
  function addSelectedBook(bookId) {
    setSelectedBooks({ ...selectedBooks, [bookId]: !selectedBooks[bookId] });
  }

  return (
    <div>
      <div className="title" onClick={() => addSelectedBook(bookId)}>
        {bookTitle}
      </div>
      {selectedBooks[bookId] && <BookWordsList bookId={bookId} />}
    </div>
  );
}
