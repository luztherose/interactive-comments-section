import { useState, useEffect } from "react";
import { updateComment } from "./utils/commentsHelpers";
import Footer from "./components/footer.jsx";
import AddComment from "./components/addComment.jsx";
import Comment from "./components/comment.jsx";
import Reply from "./components/reply.jsx";
import data from "./data/data.json";

const App = () => {
  const initialCurrentUser =
    JSON.parse(localStorage.getItem("currentUser")) ?? data.currentUser;
  const initialComments =
    JSON.parse(localStorage.getItem("comments")) ?? data.comments;

  const [currentUser, setCurrentUser] = useState(initialCurrentUser);
  const [comments, setComments] = useState(initialComments);

  const [isCommentAdded, setIsCommentAdded] = useState(false);
  const [replyToCommentInput, setReplyToCommentInput] = useState("");

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [currentUser, comments]);

  const handleCommentUpdated = (updatedComment) => {
    setComments(updateComment(comments, updatedComment));
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

  const handleCreateReply = (comment, reply) => {
    const { username, image } = currentUser;

    const getUsername = (reply) => {
      if (reply) {
        return reply.user.username;
      } else {
        return comment.user.username;
      }
    };
    const newReply = {
      id: comments.length + 3,
      content: replyToCommentInput,
      createdAt: "1 week ago",
      score: 0,
      replyingTo: getUsername(reply),
      user: {
        image: {
          png: image.png,
          webp: image.webp,
        },
        username: username,
      },
    };

    const newData = [...comments].map((currentComment) => {
      if (currentComment.id === comment.id) {
        const comment = { ...currentComment };
        const replies = [...currentComment.replies, newReply];
        return { ...comment, replies };
      } else {
        return currentComment;
      }
    });
    setComments(newData);
    setReplyToCommentInput("");
  };

  return (
    <div>
      <main className="p-8">
        <section className="mt-4">
          {comments.map((comment) => {
            return (
              <>
                <Comment
                  currentUser={currentUser}
                  comment={comment}
                  key={comment.id}
                  id={comment.id}
                  isLoggedUser={comment.user.username === currentUser.username}
                  onCommentUpdated={handleCommentUpdated}
                  onDeleteClick={handleDeleteComment}
                  onReplyComment={handleCreateReply}
                  replyToCommentInput={replyToCommentInput}
                  onReplyToCommentInput={setReplyToCommentInput}
                />
                <section className="mt-4 mx-auto border-l-2 border-gray-200 h-full reply-width">
                  {comment.replies.map((reply) => {
                    return (
                      <Reply
                        currentUser={currentUser}
                        comment={comment}
                        reply={reply}
                        key={reply.id}
                        id={reply.id}
                        isLoggedUser={
                          reply.user.username === currentUser.username
                        }
                        onCommentUpdated={handleCommentUpdated}
                        onUpdateClick={handleReplyDataOnUpdateClick}
                        onDeleteClick={handleDeleteReply}
                        onReplyComment={handleCreateReply}
                        replyToCommentInput={replyToCommentInput}
                        onReplyToCommentInput={setReplyToCommentInput}
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
          currentUser={currentUser}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
