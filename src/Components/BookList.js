import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const BookList = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyAWDokeMSsEd_OjRFwr3xHYiNOmR4dd1po"
  );
  //https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyAWDokeMSsEd_OjRFwr3xHYiNOmR4dd1po

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=20"
        //"&minResults=1"
        //"&startIndex=0"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  // export default class BookList extends React.Component {
  //   render() {
  return (
    <>
      <div className="main-container">
        <div className="top-head"></div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Search Book..."
                onChange={handleChange}
                autoComplete="off"
              ></input>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
        <div className="top-container">
          <h2>Find Books</h2>
          <div className="book-list">
            {result.map((book) => (
              <a href={book.volumeInfo.previewLink}>
                <img
                  src={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail
                  }
                  alt={book.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  //   }
  // }
};

export default BookList;
