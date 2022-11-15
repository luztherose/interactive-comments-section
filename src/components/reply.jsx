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
  onUpdateClick,
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
  let [value, setValue] = useState(reply.score);

  const handleReply = () => {
    setShowReplyComponent(true);
    setIsReplyAdded(true);
    setIsReplyDisabled(true);
  };
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleUpdateClick = (replyID, newContent) => {
    onUpdateClick(replyID, newContent);
    setIsEditMode(false);
  };

  const handleIncrement = () => {
    setValue(value++);
  };

  const handleDecrement = () => {
    if (value != 0) {
      setValue(value--);
    }
  };

  return (
    <div className="mt-4 ml-8 w-full mb-4 md:ml-4 md:w-fit">
      <div className="px-4 py-6  mx-auto bg-white flex gap-3 items-center rounded-lg md:flex-col sm:p-4">
        <Counter
          value={value}
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
            comment={reply}
            onUpdateClick={handleUpdateClick}
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
