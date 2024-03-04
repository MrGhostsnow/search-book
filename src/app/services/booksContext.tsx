"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface BooksContextProps {
  children: ReactNode;
}

interface IBook {
  id: string;
  title: string;
  authors: string;
  publishedDate: string;
  description: string;
}

interface BooksContextData {
  searchBooks: IBook[];
  setSearchBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

export const BooksProvider: React.FC<BooksContextProps> = ({ children }) => {
  const [searchBooks, setSearchBooks] = useState<IBook[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <BooksContext.Provider
      value={{
        searchBooks,
        setSearchBooks,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = (): BooksContextData => {
  return useContext(BooksContext);
};
