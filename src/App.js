import { useState, Fragment } from "react";
import Footer from "./components/footer.jsx";
import AddComment from "./components/addComment.jsx";
import Comment from "./components/comment.jsx";
import Reply from "./components/reply";
import data from "./data/data.json";

const App = () => {
  const [comments, setComments] = useState(data.comments.map(
     (comment) => {
      let newreplies= comment.replies.map( (reply) => {
        return {...reply, isEditMode : false }
      })
      return {...comment, isEditMode : false, replies: newreplies }
     }
  ));
  return (
    <div>
      <main className="bg-gray-100 p-8">
        <section className="mt-4">
          {comments.map((comment, index) => {
            return (
              <>
                <Comment user="" comment={comment} key={comment.id} />
                <section className="mt-4 mx-auto border-l border-gray-300 h-full max-w-lg">
                  {comment.replies.map((reply) => {
                    return <Reply user="" reply={reply} key={reply.id} id={reply.id}/>;
                  })}
                </section>
              </>
            );
          })}
        </section>
        <AddComment />
      </main>
      <Footer />
    </div>
  );
};

export default App;
