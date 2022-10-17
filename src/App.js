import Footer from './components/footer.jsx';
import AddComment from './components/addComment.jsx';
import PostedComment from './components/postedComment.jsx'


const App = () =>  {
  return (
    <div>
      <header>
        {/* <h1 className="text-4xl text-center">Working...</h1> */}
      </header>
      <main>
        <AddComment />
        <PostedComment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
