import React from "react";
import {
  ContainerHomePage,
  Label,
  LabelSection,
  ContainerFindBooks,
} from "./styles";
import SearchSection from "../SearchSection";
import BookCard from "../BookCard";
import { useBooks } from "../../services/booksContext";
import { IBook } from "../../interfaces/IBook";

const HomePage: React.FC = () => {
  const { searchBooks, setSearchBooks, setCurrentPage } = useBooks();

  async function fetchBooks(searchTerms: string) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchTerms
        )}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSearchBooks(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (searchTerm: string) => {
    fetchBooks(searchTerm);
    setCurrentPage(2);
  };

  return (
    <>
      {searchBooks.length > 0 ? (
        <ContainerFindBooks>
          {searchBooks.map((book: IBook) => (
            <BookCard key={book.id} book={book} />
          ))}
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
