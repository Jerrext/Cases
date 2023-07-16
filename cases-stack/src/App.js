// import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  getPosts,
  getSinglePost,
} from "./redux/actions/actionCreator";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((store) => store?.counter?.count);
  const posts = useSelector((store) => store?.allPosts?.posts);
  const post = useSelector((store) => store?.allPosts?.post);
  const albums = useSelector((store) => store?.allPosts?.albums);
  const { albumsError, postsError, postError } = useSelector((store) => store?.errors);

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleGetSinglePost = () => {
    dispatch(getSinglePost(count));
  };

  const handleGetPosts = () => {
    dispatch(getPosts());
  };

  return (
    <div className="App">
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <div>{count}</div>
      <div>
        <button onClick={handleGetSinglePost}>Get post</button>
        {!postError ? (
          <ul>
            {post.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        ) : (
          <p>{postError}</p>
        )}
      </div>
      <div>
        <button onClick={handleGetPosts}>Get all posts</button>
        <div className="posts__container">
          {!postsError ? (
            <ul>
              {posts.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })}
            </ul>
          ) : (
            <p>{postsError}</p>
          )}
          {!albumsError ? (
            <ul>
              {albums.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })}
            </ul>
          ) : (
            <p>{albumsError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
