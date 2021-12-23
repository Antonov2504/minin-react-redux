import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные Посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные Посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
