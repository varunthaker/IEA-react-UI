import { SearchBar } from "./Search";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function BookWordsList({ bookId }) {
  const {
    data: bookTop10WordList,
    error,
    isLoading,
  } = useSWR(`https://localhost:7166/api/books/${bookId}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="BookBody">
      <p className="BookBodyTitleOne"> Top Ten Words </p>
      <div className="ToptenWordsDiv">
        <ul>
          {bookTop10WordList?.map((top10Words, idx) => (
            <li key={idx}>{top10Words}</li>
          ))}
        </ul>
      </div>
      <SearchBar bookId={bookId} />
    </div>
  );
}
