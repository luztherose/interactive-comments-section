import React, { useState } from "react";
import { getImageURL } from "../utils/helpers";
import CommentPrimaryActionButtons from "./commentPrimaryActionButtons";

const CommentHeader = ({
  comment,
  onReplyClick,
  isLoggedUser,
  isCommentUpdated,
  onEditClick,
  onDeleteClick,
}) => {
  const { createdAt, user } = comment;
  const { username, image } = user;

  return (
    <div className="flex w-full items-start -mb-3">
      <div className="grow  w-3/5 ml-3 mr-3 text-center md:order-first">
        <div className="flex justify-start gap-3 mb-5">
          <img
            className="grow-0 h-8 rounded-full sm:ml-0"
            src={getImageURL(image.png)}
            alt="user profile's avatar"
          />
          <p className="font-semibold text-sm self-center">{username}</p>
          {isLoggedUser && (
            <p className="text-sm text-white bg-moderateBlue px-2 m-0 h-fit self-center">
              You
            </p>
          )}
          <p className="text-gray-600 text-sm self-center">{createdAt}</p>
        </div>
      </div>
      <CommentPrimaryActionButtons
        comment={comment}
        isLoggedUser={isLoggedUser}
        isCommentUpdated={isCommentUpdated}
        onReplyClick={onReplyClick}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};

export default CommentHeader;