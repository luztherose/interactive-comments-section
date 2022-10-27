import React, { useState } from "react";
import EditDeleteComment from "./editDeleteComment";
import iconReply from "../images/icon-reply.svg";
import { getButtonClasses } from "../utils/helpers";

const CommentPrimaryActionButtons = ({
  isLoggedUser,
  isCommentUpdated,
  onReplyClick,
  onEditClick,
}) => {
  const [isReplyActive, setIsReplyActive] = useState(false);

  if (isLoggedUser) {
    return <EditDeleteComment onEditClick={onEditClick} isCommentUpdated={isCommentUpdated}/>;
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
