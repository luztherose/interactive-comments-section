import React, { useState } from "react";
import EditDeleteComment from "./editDeleteComment";
import iconReply from "../images/icon-reply.svg";
import { getButtonClasses } from "../utils/helpers";

const CommentPrimaryActionButtons = ({
  comment,
  isLoggedUser,
  isEditMode,
  onReplyClick,
  onEditClick,
  onDeleteClick,
  isReplyDisabled,
}) => {
  if (isLoggedUser) {
    return (
      <EditDeleteComment
        comment={comment}
        isEditMode={isEditMode}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
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
