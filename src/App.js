import { useState, Fragment } from "react";
import Footer from "./components/footer.jsx";
import AddComment from "./components/addComment.jsx";
import Comment from "./components/comment.jsx";
import Reply from "./components/reply.jsx";
import data from "./data/data.json";

const App = () => {
  const [comments, setComments] = useState(data.comments);

  const handleDataOnUpdateClick = (commentID, newContent) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentID) {
        return { ...comment, content: newContent };
      } else {
        return comment;
      }
    });
    setComments(updatedComments);
  };

  const handleReplyDataOnUpdateClick = (replyID, newContent) => {
    const updatedReplies = comments.map((comment) => {
      const getUpdatedReply = (comment) => {
        return comment.replies.map((reply) => {
          const replies = { ...reply, content: newContent };
          if (reply.id === replyID) {
            return { ...replies };
          } else {
            return reply;
          }
        });
      };
      return { ...comment, replies: getUpdatedReply(comment) };
    });
    setComments(updatedReplies);
  };

  return (
    <div>
      <main className="bg-gray-100 p-8">
        <section className="mt-4">
          {comments.map((comment, index) => {
            return (
              <>
                <Comment
                  comment={comment}
                  key={index}
                  id={comment.id}
                  isLoggedUser={comment.user.username === "maxblagun"}
                  onUpdateClick={handleDataOnUpdateClick}
                />
                <section className="mt-4 mx-auto border-l border-gray-300 h-full max-w-lg">
                  {comment.replies.map((reply, index) => {
                    return (
                      <Reply
                        reply={reply}
                        key={index}
                        id={reply.id}
                        isLoggedUser={reply.user.username === "juliusomo"}
                        onUpdateClick={handleReplyDataOnUpdateClick}
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
