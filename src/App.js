import { useState, Fragment } from "react";
import Footer from "./components/footer.jsx";
import AddComment from "./components/addComment.jsx";
import Comment from "./components/comment.jsx";
import Reply from "./components/reply";
import UserCommentReply from "./components/userCommentReply";
import data from "./data/data.json";

const App = () => {
  const [comments, setComments] = useState(data.comments);
  console.log(comments);
  return (
    <div>
      <main className="bg-gray-100 p-8">
        <section className="mt-4">
          {comments.map((comment, index) => {
            return (
              <>
                <Comment user="" comment={comment} key={comment.id} />
                <section className="mt-4 mx-auto border-l border-gray-300 h-full w-fit">
                  {comment.replies.map((reply) => {
                    return <Reply user="" reply={reply} key={reply.id} />;
                  })}
                </section>
              </>
            );
          })}
        </section>
        {/* <UserCommentReply /> */}
        <AddComment />
      </main>
      <Footer />
    </div>
  );
};

export default App;
