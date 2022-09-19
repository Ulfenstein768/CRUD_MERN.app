import React, { useState, useEffect } from "react";
import Axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

import { Button, Container, Card } from "react-bootstrap";

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
    <>
      {articleList.map((val, key) => {
        return (
          <Card key={key} className="mt-5">
            <Card.Body>
              <Card.Title className="mb-2">{val.title}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {val.description}
              </Card.Subtitle>
              <Card.Text className="me-3">{val.article}</Card.Text>
              <Button href="/edit">Edit article</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default App;
