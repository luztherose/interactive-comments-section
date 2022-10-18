import React from "react";
import iconDelete from "../images/icon-delete.svg";
import iconEdit from "../images/icon-edit.svg";

const EditDeleteComment = () => {
  return (
    <div className="w-2/5">
      <button className="w-3/5 text-sm text-softRed font-semibold md:self-end md:-mt-6">
        <span className="inline-block mr-1">
          <img className="" src={iconDelete} alt="user profile's avatar" />
        </span>
        Delete
      </button>
      <button className="w-2/5 text-sm text-moderateBlue font-semibold md:self-end md:-mt-6">
        <span className="inline-block mr-1">
          <img className="" src={iconEdit} alt="user profile's avatar" />
        </span>
        Edit
      </button>
    </div>
  );
};

export default EditDeleteComment;