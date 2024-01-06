// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { SearchBar } from "./Search";
import { BookWordsList } from "./BookWordsList";
import { useState } from "react";

export function Book({ bookTitle, bookId }) {
  const [selectedBooks, setSelectedBooks] = useState({});
  function addSelectedBook(bookId) {
    setSelectedBooks({ ...selectedBooks, [bookId]: !selectedBooks[bookId] });
  }

  return (
    <div>
      <div onClick={() => addSelectedBook(bookId)}>{bookTitle}</div>
      {selectedBooks[bookId] && <BookWordsList bookId={bookId} />}
    </div>
  );
}
