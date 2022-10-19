import Footer from './components/footer.jsx';
import AddComment from './components/addComment.jsx';
import PostedComment from './components/postedComment.jsx';
import UserCommentReply from './components/userCommentReply'


const App = () =>  {
  return (
    <div>
      <header>
        {/* <h1 className="text-4xl text-center">Working...</h1> */}
      </header>
      <main className="bg-gray-100 p-12">
        <PostedComment />
        <UserCommentReply />
        <AddComment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
