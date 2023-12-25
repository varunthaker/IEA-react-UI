import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SearchBar } from "./Search";

export function Book({ book }) {
  const { bookTitle, top15Words } = book;

  return (
    <div>
      <Accordion style={{ marginBottom: "0.5rem" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#dadada" }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{bookTitle}</Typography>
        </AccordionSummary>
        <SearchBar listToSearch={top15Words} />
        <AccordionDetails>
          <Typography>
            <h3>Top Ten Words:</h3>
            {top15Words?.map((word) => `${word}, `)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
