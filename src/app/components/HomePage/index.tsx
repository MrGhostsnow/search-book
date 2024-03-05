import React, { useState } from "react";
import {
  ContainerHomePage,
  SectionFindBooks,
  Label,
  LabelSection,
  ContainerFindBooks,
  PaginationButtons,
  ResultTerm,
} from "./styles";
import SearchSection from "../SearchSection";
import BookCard from "../BookCard";
import { useBooks } from "../../services/booksContext";
import { IBook } from "../../interfaces/IBook";

const HomePage: React.FC = () => {
  const { searchBooks, setSearchBooks, setCurrentPage } = useBooks();
  const [term, setTerm] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const maxResults = 10;

  async function fetchBooks(
    searchTerms: string,
    startIndex: number,
    maxResults: number
  ) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchTerms
        )}&startIndex=${startIndex}&maxResults=${maxResults}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSearchBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (searchTerm: string) => {
    fetchBooks(searchTerm, startIndex, maxResults);
    setTerm(searchTerm);
    setCurrentPage(1);
    setStartIndex(0);
  };

  const handleNextPage = () => {
    setStartIndex(startIndex + maxResults);
    fetchBooks(term, startIndex + maxResults, maxResults);
  };

  const handlePreviousPage = () => {
    if (startIndex - maxResults >= 0) {
      setStartIndex(startIndex - maxResults);
      fetchBooks(term, startIndex - maxResults, maxResults);
    }
  };

  return (
    <>
      {searchBooks.length > 0 ? (
        <ContainerFindBooks>
          <SearchSection onSearch={handleSearch} />
          <ResultTerm>These are the results for "{term}"</ResultTerm>
          <SectionFindBooks>
            {searchBooks.map((book: IBook) => (
              <BookCard key={book.id} book={book} />
            ))}
          </SectionFindBooks>
          <PaginationButtons>
            <button onClick={handlePreviousPage} disabled={startIndex === 0}>
              Previous
            </button>
            <button onClick={handleNextPage}>Next</button>
          </PaginationButtons>
        </ContainerFindBooks>
      ) : (
        <ContainerHomePage>
          <LabelSection>
            <Label>
              Thousands of books just a click away
              <br />
              Enter the title you are looking for
            </Label>
          </LabelSection>
          <SearchSection onSearch={handleSearch} />
        </ContainerHomePage>
      )}
    </>
  );
};

export default HomePage;
