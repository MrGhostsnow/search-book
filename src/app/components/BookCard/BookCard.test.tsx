import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import BookCard from ".";

const mockBook = {
  id: "id-do-livro-ficticio",
  volumeInfo: {
    title: "Título do Livro Fictício",
    description: "Descrição do Livro Fictício",
    publishedDate: "2022-01-01",
    imageLinks: {
      thumbnail: "url-da-miniatura-ficticia",
    },
    infoLink: "link-de-informacoes-ficticio",
  },
};

describe("Componente BookCard", () => {
  test("renderiza o card do livro com os dados corretos", () => {
    render(<BookCard book={mockBook} />);

    expect(screen.getByAltText(mockBook.volumeInfo.title)).toBeInTheDocument();
    expect(screen.getByText(mockBook.volumeInfo.title)).toBeInTheDocument();
    expect(
      screen.getByText(mockBook.volumeInfo.description)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockBook.volumeInfo.publishedDate)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /mais informações/i })
    ).toHaveAttribute("href", mockBook.volumeInfo.infoLink);
  });
});
