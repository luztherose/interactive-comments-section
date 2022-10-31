import React, { useState } from "react";
import userAvatar from "../images/avatars/image-amyrobson.png";

const getAddReplyCommentClasses = (show, isReplyToCommentAdded) => {
  let classes = "mt-2 bg-gray-100";
  if (!show || isReplyToCommentAdded) {
    return (classes += " hidden");
  }
  return (classes += " block");
};

const AddReply = ({
  show,
  onReplyComment,
  comment,
  reply,
  isReplyToCommentAdded,
}) => {
  const [replyInput, setReplyInput] = useState("");

  const handleReplyMessage = (event) => {
    setReplyInput(event.target.value);
  };

  return (
    <section className={getAddReplyCommentClasses(show, isReplyToCommentAdded)}>
      <div className="p-5 max-w-lg mx-auto bg-white flex items-start rounded-lg md:flex-col md:max-w-md sm:max-w-xl">
        <img
          className="grow-0 block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0 md:ml-14 md:mt-3"
          src={userAvatar}
          alt="user profile's avatar"
        />
        <div className="grow ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-4/5">
          <textarea
            className="border border-moderateBlue -200 pt-1 pl-3 w-full h-16 resize-none rounded text-sm"
            placeholder="Add a comment"
            value={isReplyToCommentAdded ? "" : replyInput}
            onChange={handleReplyMessage}
          ></textarea>
        </div>
        <button
          className="grow-0 px-6 py-2 text-sm text-white font-semibold rounded-lg border bg-moderateBlue md:self-end md:-mt-9 md:mr-12 sm:mr-0"
          onClick={() => onReplyComment(comment, reply, replyInput)}
        >
          Reply
        </button>
      </div>
    </section>
  );
};

export default AddReply;
