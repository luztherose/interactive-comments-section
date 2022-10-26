import { useState, Fragment } from "react";
import Footer from "./components/footer.jsx";
import AddComment from "./components/addComment.jsx";
import Comment from "./components/comment.jsx";
import Reply from "./components/reply.jsx";
import data from "./data/data.json";

const App = () => {
  const [comments, setComments] = useState(data.comments);
  return (
    <div>
      <main className="bg-gray-100 p-8">
        <section className="mt-4">
          {comments.map((comment, index) => {
            return (
              <>
                <Comment
                  comment={comment}
                  key={comment.id}
                  isLoggedUser={comment.user.username === "maxblagun"}
                />
                <section className="mt-4 mx-auto border-l border-gray-300 h-full max-w-lg">
                  {comment.replies.map((reply) => {
                    return (
                      <Reply
                        reply={reply}
                        key={reply.id}
                        id={reply.id}
                        isLoggedUser={reply.user.username === "juliusomo"}
                      />
                    );
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
