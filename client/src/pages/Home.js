import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
import { StoreProvider } from "../utils/GlobalState";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <StoreProvider>
            <CreatePostForm />
          </StoreProvider>
        </Col>
        <Col size="md-6 sm-12">
          <StoreProvider>
            <PostsList />
          </StoreProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
