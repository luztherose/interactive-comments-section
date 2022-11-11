import React, { useState } from "react";
import iconDelete from "../images/icon-delete.svg";
import iconEdit from "../images/icon-edit.svg";
import { getButtonClasses } from "../utils/helpers";

const EditDeleteComment = ({
  comment,
  onEditClick,
  onDeleteClick,
  isEditMode,
  isCommentUpdated,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="w-2/5">
      <button
        className="w-3/5 text-sm text-softRed font-semibold md:self-end md:-mt-6 hover:text-paleRed"
        onClick={() => onDeleteClick(comment.id)}
      >
        <span className="inline-block mr-1">
          <img src={iconDelete} alt="user profile's avatar" />
        </span>
        Delete
      </button>
      <button
        className={getButtonClasses(isEdit, isCommentUpdated)}
        onClick={() => onEditClick(setIsEdit(true))}
        disabled={isEditMode}
      >
        <span className="inline-block mr-1">
          <img src={iconEdit} alt="user profile's avatar" />
        </span>
        Edit
      </button>
    </div>
  );
};

export default EditDeleteComment;
