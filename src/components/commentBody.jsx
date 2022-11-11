import React, { useState } from "react";

const CommentBody = ({ editable, comment, onEditClick, onUpdateClick }) => {
  const { content, replyingTo } = comment;
  const newContent = replyingTo ? `@ ${replyingTo} ${content}` : content;
  const [input, setInput] = useState(newContent);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  if (editable) {
    return (
      <>
        <div className="grow  w-full ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-5/5">
          <textarea
            className="border border-moderateBlue pt-1 pl-3 w-11/12 h-20 resize-none rounded text-sm"
            placeholder="Add a comment"
            value={`${input}`}
            onChange={handleInputChange}
          ></textarea>
        </div>
        {editable && (
          <div className="flex w-full justify-end mr-3 mt-2  mb-2 text-sm md:m-0 md:w-11/12 md:-mt-3">
            <button
              className="grow-0 px-4 py-2 text-white font-semibold rounded-lg border bg-moderateBlue md:self-end md:-mt-6 md:mr-9 sm:mr-0 md:px-4 md:py-1 hover:bg-lightGrayishBlue"
              onClick={() => onUpdateClick(comment.id, input)}
            >
              UPDATE
            </button>
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="grow  w-full ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-5/5">
        <p className="text-sm text-gray-600 text-start w-11/12 sm:ml-0">
          <span className="font-semibold text-sm text-moderateBlue">
            {replyingTo ? "@" : ""} {replyingTo}
          </span>{" "}
          {content}
        </p>
      </div>
    );
  }
};

export default CommentBody;
