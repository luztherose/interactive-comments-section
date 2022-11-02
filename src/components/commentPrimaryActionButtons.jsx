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
  isReplyDisabled,
}) => {
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
      className={getButtonClasses(isReplyDisabled)}
      disabled={isReplyDisabled}
      onClick={() => onReplyClick()}
    >
      <span className="inline-block mr-1">
        <img src={iconReply} alt="user profile's avatar" />
      </span>
      Reply
    </button>
  );
};

export default CommentPrimaryActionButtons;
