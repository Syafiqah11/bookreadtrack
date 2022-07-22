import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./AddBook";
import BookAll from "./BookAll";
import "./bookcrud.css";
import React from "react";

function BookCrud() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
    <>
      <AddBook id={bookId} setBookId={setBookId} />

      <BookAll getBookId={getBookIdHandler} />
    </>
  );
}

export default BookCrud;
