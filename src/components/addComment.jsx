import React, { useState } from "react";

const AddComment = ({ onSendClick, isCommentAdded, currentUser }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputOnChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <section className="mt-4">
      <div className="p-5 max-w-2xl mx-auto bg-white flex items-start rounded-lg md:flex-col">
        <img
          className="grow-0 block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0 md:ml-14 md:mt-3"
          src={currentUser.image.png}
          alt="user profile's avatar"
        />
        <div className="grow ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-4/5">
          <textarea
            className="border border-lightGray pt-1 pl-3 w-full h-16 resize-none rounded text-sm"
            placeholder="Add a comment..."
            value={isCommentAdded ? "" : userInput}
            onChange={handleInputOnChange}
          ></textarea>
        </div>
        <button
          className="grow-0 px-6 py-2 text-sm text-white font-medium rounded-lg border bg-moderateBlue md:self-end md:-mt-9 md:mr-16 sm:mr-0 hover:bg-lightGrayishBlue"
          onClick={() => onSendClick(userInput)}
        >
          SEND
        </button>
      </div>
    </section>
  );
};

export default AddComment;
