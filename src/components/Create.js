import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import { Button, Form, Container, Col } from "react-bootstrap";

function App() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleDescription, setArticleDescription] = useState("");
  const [article, setArticle] = useState("");

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4001/read").then((response) => {
      setArticleList(response.data);
    });
  }, []);

  const addToList = () => {
    window.location.reload(true);
    Axios.post("http://localhost:4001/insert", {
      articleTitle: articleTitle,
      articleDescription: articleDescription,
      article: article,
    });
    console.log(articleTitle + articleDescription + article);
  };

  return (
    <div className="App">
      <Container>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            id="title"
            placeholder="The title for your article"
            onChange={(event) => {
              setArticleTitle(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            id="description"
            placeholder="Your article's description"
            onChange={(event) => {
              setArticleDescription(event.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="article">Article Content</Form.Label>
          <Form.Control
            as="textarea"
            name="article"
            id="article"
            placeholder="Your article"
            onChange={(event) => {
              setArticle(event.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Container fluid="false">
          <Col>
            <Button
              href="/"
              variant="primary"
              type="submit"
              className="primary mt-2 me-3"
              onClick={addToList}
            >
              Save
            </Button>
            <a href="/">cancel</a>
          </Col>
        </Container>
      </Container>
    </div>
  );
}

export default App;
