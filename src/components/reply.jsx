import React, { useState } from "react";
import CommentHeader from "./commentHeader";
import CommentBody from "./commentBody";
import Counter from "./counter";
import AddReply from "./addReply";
import DeleteCommentModal from "./deleteCommentModal";

const Reply = ({
  currentUser,
  comment,
  reply,
  isLoggedUser,
  onCommentUpdated,
  onReplyUpdated,
  onDeleteClick,
  onReplyComment,
  replyToCommentInput,
  onReplyToCommentInput,
}) => {
  const [isReplyDisabled, setIsReplyDisabled] = useState(false);
  const [isReplyAdded, setIsReplyAdded] = useState(false);
  const [showReplyComponent, setShowReplyComponent] = useState(false);
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleReply = () => {
    setShowReplyComponent(true);
    setIsReplyAdded(true);
    setIsReplyDisabled(true);
  };
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleOnReplyUpdated = (content) => {
    onReplyUpdated(comment, { ...reply, content });
    setIsEditMode(false);
  };

  const handleIncrement = () => {
    const updatedReply = { ...reply, score: [++reply.score] };
    const updatedReplies = comment.replies.map((reply) => {
      if (reply.id === updatedReply.id) {
        return updatedReply;
      } else {
        return reply;
      }
    });
    onCommentUpdated({ ...comment, replies: updatedReplies });
  };

  const handleDecrement = () => {
    const updatedReply = { ...reply, score: [--reply.score] };
    const updatedReplies = comment.replies.map((reply) => {
      if (reply.id === updatedReply.id) {
        return updatedReply;
      } else {
        return reply;
      }
    });
    onCommentUpdated({ ...comment, replies: updatedReplies });
  };

  return (
    <div className="mt-4 ml-8 w-full mb-4 md:ml-4 md:w-fit">
      <div className="px-4 py-6  mx-auto bg-white flex gap-3 items-center rounded-lg md:flex-col sm:p-4">
        <Counter
          value={reply.score}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <div className="w-11/12 md:-order-1 md:relative">
          <CommentHeader
            comment={reply}
            isLoggedUser={isLoggedUser}
            isEditMode={isEditMode}
            isReplyAdded={isReplyAdded}
            isReplyDisabled={isReplyDisabled}
            onReplyClick={handleReply}
            onEditClick={handleEditClick}
            onDeleteClick={() => {
              setShowDeleteCommentModal(true);
            }}
          />
          <CommentBody
            editable={isEditMode}
            content={reply.content}
            replyingTo={reply.replyingTo}
            onContentUpdated={handleOnReplyUpdated}
          />
        </div>
      </div>
      <AddReply
        show={showReplyComponent}
        currentUser={currentUser}
        reply={reply}
        comment={comment}
        onReplyComment={() => {
          onReplyComment(comment, reply);
          setShowReplyComponent(false);
          setIsReplyDisabled(false);
        }}
        replyToCommentInput={replyToCommentInput}
        onReplyToCommentInput={onReplyToCommentInput}
      />
      <DeleteCommentModal
        show={showDeleteCommentModal}
        comment={reply}
        onDeleteClick={onDeleteClick}
        onCancelClick={setShowDeleteCommentModal}
      />
    </div>
  );
};

export default Reply;
