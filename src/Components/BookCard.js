import React, { useState } from "react";
import axios from "axios";
import BookDetails from "./BookDetails";

const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
              <BookDetails
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default BookCard;
