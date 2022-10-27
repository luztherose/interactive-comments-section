import React, { useState } from "react";
import EditDeleteComment from "./editDeleteComment";
import iconReply from "../images/icon-reply.svg";
import { getButtonClasses } from "../utils/helpers";

const CommentPrimaryActionButtons = ({
  comment,
  isLoggedUser,
  isCommentUpdated,
  onReplyClick,
  onEditClick,
  onDeleteClick,
}) => {
  const [isReplyActive, setIsReplyActive] = useState(false);

  if (isLoggedUser) {
    return (
      <EditDeleteComment
        comment={comment}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
        isCommentUpdated={isCommentUpdated}
      />
    );
  }
  return (
    <button
      className={getButtonClasses(isReplyActive)}
      disabled={isReplyActive}
      onClick={() => onReplyClick(setIsReplyActive(true))}
    >
      <span className="inline-block mr-1">
        <img src={iconReply} alt="user profile's avatar" />
      </span>
      Reply
    </button>
  );
};

export default CommentPrimaryActionButtons;
