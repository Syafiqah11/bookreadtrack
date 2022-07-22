import React from "react";
import "./bookdetails.css";

const BookDetails = ({ show, book, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i class="fas fa-times">X</i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h2>{book.volumeInfo.title}</h2>
              <h3>( {book.volumeInfo.authors} )</h3>
              <p>Pages: {book.volumeInfo.pageCount}</p>
              <p>
                Publisher: {book.volumeInfo.publisher}
                <span> ( {book.volumeInfo.publishedDate} )</span>
              </p>
              <br />
              <a href={book.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{book.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
