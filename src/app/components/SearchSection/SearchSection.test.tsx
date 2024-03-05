import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchSection from ".";

describe("SearchSection", () => {
  test("calls onSearch prop with correct search term when user searches", () => {
    const mockOnSearch = jest.fn();

    render(<SearchSection onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText(/Pesquise por livros/i);

    fireEvent.change(inputElement, { target: { value: "Harry Potter" } });

    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith("Harry Potter");
  });
});
