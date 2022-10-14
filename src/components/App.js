import Footer from './Footer';
import AddComment from './AddComment';
import PostedComment from './PostedComment'


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
