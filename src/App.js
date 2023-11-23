import './App.css';
import AddPostForm from './features/posts/AddPostForm';
// import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;
