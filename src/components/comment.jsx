import React, { Fragment, useState } from "react";
import CommentHeader from "./commentHeader";
import CommentBody from "./commentBody";
import Counter from "./counter";
import AddReply from "./addReply";

const Comment = ({
  comment,
  isLoggedUser,
  onUpdateClick,
  onDeleteClick,
  onReplyComment,
  isReplyToCommentAdded,
}) => {
  const [showReplyComponent, setShowReplyComponent] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [isCommentUpdated, setIsCommentUpdated] = useState(false);
  const [isReplyAdded, setIsReplyAdded] = useState(false);
  let [value, setValue] = useState(comment.score);

  const handleReply = () => {
    setShowReplyComponent(true);
    setIsReplyAdded(true);
  };

  const handleEditClick = () => {
    setShowEditMode(true);
  };

  const handleUpdateClick = (commentID, newContent) => {
    onUpdateClick(commentID, newContent);
    setShowEditMode(false);
    setIsCommentUpdated(true);
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
      <div className="px-5 py-8 max-w-xl mx-auto bg-white flex flex-wrap gap-1 items-start rounded-lg md:flex-col sm:p-4">
        <Counter
          value={value}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <div className="w-11/12 md:-order-1">
          <CommentHeader
            comment={comment}
            isLoggedUser={isLoggedUser}
            isCommentUpdated={isCommentUpdated}
            onReplyClick={handleReply}
            onEditClick={handleEditClick}
            onDeleteClick={onDeleteClick}
            isReplyToCommentAdded={isReplyToCommentAdded}
            isReplyAdded={isReplyAdded}
          />
          <CommentBody
            editable={showEditMode}
            comment={comment}
            onEditClick={handleEditClick}
            onUpdateClick={handleUpdateClick}
          />
        </div>
      </div>
      <AddReply
        comment={comment}
        show={showReplyComponent}
        onReplyComment={onReplyComment}
        isReplyToCommentAdded={isReplyToCommentAdded}
      />
    </Fragment>
  );
};

export default Comment;
