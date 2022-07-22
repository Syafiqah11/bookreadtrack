import { Alert, Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import BookDataService from "./services/book.services";

const AddBook = ({ id, setBookId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [chapter, setChapter] = useState("");
  const [pagecount, setPageCount] = useState("");
  const [status, setStatus] = useState("Completed");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "" || chapter === "" || pagecount === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      title,
      author,
      chapter,
      pagecount,
      status,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setChapter(docSnap.data().chapter);
      setPageCount(docSnap.data().pagecount);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4">
        {/* {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )} */}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Title: </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">Author: </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookChapter">
            <InputGroup>
              <InputGroup.Text id="formBookChapter">Chapter: </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Chapter"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookPageCount">
            <InputGroup>
              <InputGroup.Text id="formBookPageCount">Page: </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Page Number"
                value={pagecount}
                onChange={(e) => setPageCount(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Completed");
                setFlag(true);
              }}
            >
              Completed
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Completed");
                setFlag(false);
              }}
            >
              Not Completed
            </Button>
          </ButtonGroup>
          <div className="view-button">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddBook;
