import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from ".";
import { useBooks } from "../../services/booksContext"; // Mock useBooks if necessary

// Mock useBooks
jest.mock("../../services/booksContext", () => ({
  useBooks: jest.fn(() => ({
    searchBooks: [],
    setSearchBooks: jest.fn(),
    setCurrentPage: jest.fn(),
  })),
}));

describe("HomePage", () => {
  test("renders homepage correctly with no search results", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Thousands of books just a click away/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: /search/i })
    ).toBeInTheDocument();
  });
});
