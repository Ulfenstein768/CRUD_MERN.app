import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import { Button, Form, Container, Card } from "react-bootstrap";

function App() {
  const [newArticleTitle, setNewArticleTitle] = useState("");
  const [newArticleDescription, setNewArticleDescription] = useState("");
  const [newArticleContent, setNewArticleContent] = useState("");

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4001/read").then((response) => {
      setArticleList(response.data);
    });
  }, []);

  const updateArticle = (id) => {
    window.location.reload(true);
    Axios.put("http://localhost:4001/update", {
      id: id,
      newArticleTitle: newArticleTitle,
      newArticleDescription: newArticleDescription,
      newArticleContent: newArticleContent,
    });
  };

  const deleteArticle = (id) => {
    window.location.reload(true);
    Axios.delete(`http://localhost:4001/delete/${id}`);
  };

  return (
    <div className="App">
      <h2 className="mt-4">Articles written</h2>
      {articleList.map((val, key) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title className="mb-2">{val.title}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {val.description}
              </Card.Subtitle>
              <Card.Text>{val.article}</Card.Text>
            </Card.Body>
            <Container>
              <Form.Label htmlFor="description">Edit Title</Form.Label>
              <Form.Control
                className="mb-3"
                placeholder={val.title}
                onChange={(event) => {
                  setNewArticleTitle(event.target.value);
                }}
              ></Form.Control>
              <Form.Label htmlFor="description">Edit Description</Form.Label>
              <Form.Control
                className="mb-3"
                placeholder={val.description}
                onChange={(event) => {
                  setNewArticleDescription(event.target.value);
                }}
              ></Form.Control>
              <Form.Label htmlFor="description">Edit Content</Form.Label>
              <Form.Control
                className="mb-3"
                placeholder={val.article}
                onChange={(event) => {
                  setNewArticleContent(event.target.value);
                }}
              ></Form.Control>
              <Button
                href="/"
                className="me-3"
                variant="primary"
                onClick={() => updateArticle(val._id)}
              >
                Update
              </Button>
              <Button variant="danger" onClick={() => deleteArticle(val._id)}>
                Delete Article
              </Button>
            </Container>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
