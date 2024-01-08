import "./App.css";
import useSWR from "swr";
import { Book } from "./components/Book";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const {
    data: booksInfo,
    error,
    isLoading,
  } = useSWR("https://localhost:7166/api/books", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

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
