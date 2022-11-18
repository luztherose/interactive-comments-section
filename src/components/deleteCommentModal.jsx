import React from "react";

const getDeleteCommentClasses = (show) => {
  let classes =
    "bg-black/[.5] h-screen w-full flex justify-center items-center fixed top-0 left-0";
  if (!show) {
    return (classes += " hidden");
  }
  return (classes += " block");
};

const DeleteCommentModal = ({
  show,
  comment,
  onDeleteClick,
  onCancelClick,
}) => {
  return (
    <div className={getDeleteCommentClasses(show)}>
      <div className="max-w-sm bg-white rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl sm:w-4/5 sm:px-4 sm:py-3 ">
        <h3 className="text-darkBlue text-xl font-medium tracking-tight">
          Delete comment
        </h3>
        <p className="text-grayishBlue mt-2 text-based">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="px-8 py-3 text-sm text-white font-medium rounded-lg bg-darkBlue sm:px-4 sm:py-3"
            onClick={() => onCancelClick(false)}
          >
            NO, CANCEL
          </button>
          <button
            className="px-8 py-3 text-sm text-white font-medium rounded-lg bg-softRed sm:px-4 sm:py-3"
            onClick={() => onDeleteClick(comment.id)}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentModal;
