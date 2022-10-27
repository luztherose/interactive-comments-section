import { useState, Fragment } from "react";
import Footer from "./components/footer.jsx";
import AddComment from "./components/addComment.jsx";
import Comment from "./components/comment.jsx";
import Reply from "./components/reply.jsx";
import data from "./data/data.json";

const App = () => {
  const [comments, setComments] = useState(data.comments);
  const [isCommentAdded, setIsCommentAdded] = useState(false);

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

  const handleDeleteComment = (commentID) => {
    const newData = comments.filter((comment) => comment.id !== commentID);
    setComments(newData);
  };

  const handleDeleteReply = (replyID) => {
    const deleteReply = (comment) => {
      return comment.replies.filter((reply) => reply.id !== replyID);
    };
    const newData = comments.map((comment) => {
      return { ...comment, replies: deleteReply(comment) };
    });

    setComments(newData);
  };

  const handleCreateComment = (input) => {
    const comment = {
      id: comments.length + 1,
      content: input,
      createdAt: "2 days ago",
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    };
    const newData = [...comments, comment];
    setComments(newData);
    setIsCommentAdded(true);
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
                  isLoggedUser={comment.user.username === "amyrobson"}
                  onUpdateClick={handleDataOnUpdateClick}
                  onDeleteClick={handleDeleteComment}
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
                        onDeleteClick={handleDeleteReply}
                      />
                    );
                  })}
                </section>
              </>
            );
          })}
        </section>
        <AddComment
          onSendClick={handleCreateComment}
          isCommentAdded={isCommentAdded}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
