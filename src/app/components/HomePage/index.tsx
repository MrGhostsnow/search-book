import React from "react";
import { ContainerHomePage, Label, LabelSection } from "./styles";
import SearchSection from "../SearchSection";
import { useBooks } from "../../services/booksContext";

interface IBook {
  id: string;
  title: string;
  authors: string;
  publishedDate: string;
  description: string;
}

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
    setCurrentPage(1);
  };

  return (
    <>
      {searchBooks.length > 0 ? (
        <div>
          {searchBooks.map((book: IBook) => (
            <div key={book.id}>
              <h1>{book.title}</h1>
              <p>{book.authors}</p>
              <p>{book.publishedDate}</p>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
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
