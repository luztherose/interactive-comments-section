import React, { useState } from "react";
import CommentHeader from "./commentHeader";
import CommentBody from "./commentBody";
import Counter from "./counter";
import AddReply from "./addReply";

const Reply = ({ reply, isLoggedUser, onUpdateClick }) => {
  const [isReplyActive, setIsReplyActive] = useState(false);
  const [isCommentUpdated, setIsCommentUpdated] = useState(false);
  const [showReplyComponent, setShowReplyComponent] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  let [value, setValue] = useState(reply.score);

  const handleReply = () => {
    setShowReplyComponent(true);
    setIsReplyActive(true);
  };
  const handleEditClick = () => {
    setShowEditMode(true);
  };

  const handleUpdateClick = (replyID, newContent) => {
    onUpdateClick(replyID, newContent);
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
    <div className="mt-4 ml-6 w-full">
      <div className="px-4 py-6 w-full mx-auto bg-white flex gap-1 items-center rounded-lg md:flex-col sm:p-4">
        <Counter
          value={value}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <div className="w-11/12 md:-order-1">
          <CommentHeader
            comment={reply}
            isLoggedUser={isLoggedUser}
            isCommentUpdated={isCommentUpdated}
            isReplyActive={isReplyActive}
            onReplyClick={handleReply}
            onEditClick={handleEditClick}
          />
          <CommentBody
            editable={showEditMode}
            comment={reply}
            onUpdateClick={handleUpdateClick}
          />
        </div>
      </div>
      <AddReply show={showReplyComponent} />
    </div>
  );
};

export default Reply;
