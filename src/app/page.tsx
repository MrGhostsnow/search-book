"use client";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import { BooksProvider } from "./services/booksContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <BooksProvider>
        <HomePage />
      </BooksProvider>
    </main>
  );
}
