import React from "react";

const getDeleteCommentClasses = (show) => {
  let classes =
    "bg-black/[.5] h-screen w-full flex justify-center items-center fixed top-0 left-0";
  if (!show) {
    return (classes += " hidden");
  }
  return (classes += " block");
};

const DeleteCommentModal = ({ show }) => {
  return (
    <div className={getDeleteCommentClasses(show)}>
      <div className="max-w-sm bg-white rounded-lg px-6 py-6 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-darkBlue text-xl font-medium tracking-tight">
          Delete comment
        </h3>
        <p className="text-grayishBlue mt-2 text-based">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="px-8 py-3 text-sm text-white font-semibold rounded-lg bg-darkBlue">
            NO, CANCEL
          </button>
          <button className="px-8 py-3 text-sm text-white font-semibold rounded-lg bg-softRed">
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentModal;
