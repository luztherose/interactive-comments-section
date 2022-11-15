import React, { Fragment, useState } from "react";
import CommentHeader from "./commentHeader";
import CommentBody from "./commentBody";
import Counter from "./counter";
import AddReply from "./addReply";
import DeleteCommentModal from "./deleteCommentModal";

const Comment = ({
  currentUser,
  comment,
  isLoggedUser,
  onUpdateClick,
  onDeleteClick,
  onReplyComment,
  replyToCommentInput,
  onReplyToCommentInput,
}) => {
  const [showReplyComponent, setShowReplyComponent] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteCommentModal, setShowDeleteCommentModal] = useState(false);
  const [isReplyAdded, setIsReplyAdded] = useState(false);
  const [isReplyDisabled, setIsReplyDisabled] = useState(false);

  let [value, setValue] = useState(comment.score);

  const handleReply = () => {
    setShowReplyComponent(true);
    setIsReplyAdded(true);
    setIsReplyDisabled(true);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleUpdateClick = (commentID, newContent) => {
    onUpdateClick(commentID, newContent);
    setIsEditMode(false);
    setIsEditMode(true);
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
    <Fragment>
      <div className="px-5 py-8 max-w-2xl mx-auto bg-white flex flex-wrap gap-3 items-start rounded-lg md:flex-col sm:p-4">
        <Counter
          value={value}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <div className="w-11/12 md:-order-1 md:relative">
          <CommentHeader
            comment={comment}
            isLoggedUser={isLoggedUser}
            isEditMode={isEditMode}
            onReplyClick={handleReply}
            onEditClick={handleEditClick}
            onDeleteClick={() => {
              setShowDeleteCommentModal(true);
            }}
            isReplyAdded={isReplyAdded}
            isReplyDisabled={isReplyDisabled}
          />
          <CommentBody
            editable={isEditMode}
            comment={comment}
            onEditClick={handleEditClick}
            onUpdateClick={handleUpdateClick}
          />
        </div>
      </div>
      <AddReply
        currentUser={currentUser}
        comment={comment}
        show={showReplyComponent}
        onReplyComment={(comment, reply) => {
          onReplyComment(comment, reply);
          setShowReplyComponent(false);
          setIsReplyDisabled(false);
        }}
        replyToCommentInput={replyToCommentInput}
        onReplyToCommentInput={onReplyToCommentInput}
      />
      <DeleteCommentModal
        show={showDeleteCommentModal}
        comment={comment}
        onDeleteClick={onDeleteClick}
        onCancelClick={setShowDeleteCommentModal}
      />
    </Fragment>
  );
};

export default Comment;
