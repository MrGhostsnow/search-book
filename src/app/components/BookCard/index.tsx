"use client";
import React from "react";
import {
  ContainerBookCard,
  SectionBookCard,
  Title,
  Description,
  PublishedDate,
} from "./styles";
import { IBook } from "../../interfaces/IBook";
import { limitDescription } from "../../utils/limitDescription";
import Link from "next/link";

interface BookCardProps {
  book: IBook;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const title = book.volumeInfo?.title;
  const description = book.volumeInfo?.description;
  const publishedDate = book.volumeInfo?.publishedDate;
  const thumbnail = book.volumeInfo?.imageLinks?.thumbnail || "";
  const infoLink = book.volumeInfo?.infoLink || "";

  return (
    <Link href={infoLink} target="_blank">
      <ContainerBookCard>
        <SectionBookCard>
          <img src={thumbnail} alt={title} />
          <Title>{limitDescription(title, 30)}</Title>
          <Description>{limitDescription(description, 100)}</Description>
          <PublishedDate>{publishedDate}</PublishedDate>
        </SectionBookCard>
      </ContainerBookCard>
    </Link>
  );
};

export default BookCard;
