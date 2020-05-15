import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const CreatePostForm = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    }).then(result => {
      console.log(result.data);
      dispatch({
        type: "ADD_POST",
        post: result.data
      });
    })
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required placeholder="Title" ref={titleRef}/>
        <textarea className="form-control mb-5" required placeholder="Body" ref={bodyRef} />
        <input className="form-control mb-5" placeholder="Screen name" ref={authorRef} />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
