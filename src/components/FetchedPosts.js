import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from './../redux/actions';
import { Loader } from "./Loader";
import Post from "./Post";

export default function FetchedPosts() {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.posts.fetchedPosts);
  const isLoading = useSelector(state => state.app.loading);

  if (isLoading) {
    return <Loader />
  }

  if (!fetchedPosts.length) {
    return <button
      className="btn btn-primary"
      onClick={() => dispatch(fetchPosts())}
    >Загрузить</button>
  }

  return fetchedPosts.map((post) => <Post key={post.id} post={post} />)
}
