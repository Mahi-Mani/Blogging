import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

function Detail(props) {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    getCurrentPost();
  }, []);

  const getCurrentPost = () => {
    // console.log(props.match.params.id);
    API.getPost(props.match.params.id).then(result => {
      // console.log(result.data);
      dispatch({
        type: "CURRENT_POST",
        post: result.data
      })
    })
  }

  const addToFavorites = (event) => {
    event.preventDefault();
    console.log("Inside add to fav");

    dispatch({
      type: "ADD_FAVORITES",
      post: state.post
    })
  }

  return (
    <>{/* Replace `true` with the state of your application */}{true ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{state.post.title} by {state.post.author}</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>{state.post.body}</p>
            </article>
          </Col>
          {/* Replace `false` to check if the current post is in the favorites list */}
          {false ? (
            <button className="btn btn-danger">Remove from Favorites!</button>
          ) : (
              <button className="btn" onClick={addToFavorites}> ❤️ Add to Favorites</button>
            )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
        <div>loading...</div>
      )}</>
  );
}

export default Detail;
