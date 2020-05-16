import React, { useReducer, createContext, useContext } from "react";
// Don't forget to import all of your actions!

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [action.post, ...state.posts]
      }
    case "VIEW_POST":
      return {
        ...state,
        posts: [...action.post]
      }
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post._id != action.id;
        })
      }
    case "CURRENT_POST":
      return {
        ...state,
        post: action.post
      }
    case "ADD_FAVORITES":
      return {
        ...state,
        favoritePosts: [action.post, ...state.favoritePosts]
      }
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    favoritePosts: [],
    post: {
      _id: 0,
      author: "",
      body: "",
      date: "",
      title: ""
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
