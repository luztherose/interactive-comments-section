import React, { useState } from "react";
import iconDelete from "../images/icon-delete.svg";
import iconEdit from "../images/icon-edit.svg";

const EditDeleteComment = ({
  comment,
  isEditMode,
  onEditClick,
  onDeleteClick,
}) => {
  const getActionButtonsClasses = (isEdit) => {
    let classes = "w-2/5 sm:w-3/5 md:flex md:justify-evenly sm:left-24 ";
    if (!isEdit) {
      return (classes += "md:absolute md:left-64 md:-bottom-12");
    }
    return classes;
  };

  return (
    <div className={getActionButtonsClasses(isEditMode)}>
      <button
        className="w-3/5 text-sm text-softRed font-semibold md:self-end md:-mt-6 hover:text-paleRed  sm:left-16"
        onClick={() => onDeleteClick(comment.id)}
      >
        <span className="inline-block mr-1">
          <img src={iconDelete} alt="user profile's avatar" />
        </span>
        Delete
      </button>
      <button
        className={
          !isEditMode
            ? "text-sm font-semibold text-moderateBlue hover:text-lightGrayishBlue"
            : "text-sm font-semibold text-lightGrayishBlue hover:text-lightGrayishBlue"
        }
        onClick={onEditClick}
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
