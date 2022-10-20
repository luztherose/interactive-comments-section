import React, { useState, Fragment } from "react";
import iconReply from "../images/icon-reply.svg";
import Counter from "./counter";
import EditDeleteComment from "./editDeleteComment";
import AddReply from "./addReply";

const getReplyButtonClasses = (isReplyActive) => {
  let classes = "w-2/5 text-sm font-semibold self-start md:-mt-6";
  if (!isReplyActive) {
    return (classes += " text-moderateBlue");
  }
  return (classes += " text-lightGrayishBlue");
};

const Reply = ({ reply }) => {
  const [isReplyActive, setIsReplyActive] = useState(false);
  const [showReplyComponent, setShowReplyComponent] = useState(false);
  let [value, setValue] = useState(reply.score);
  const { content, createdAt, replyingTo } = reply;
  const { username, image } = reply.user;

  const getImageURL = (url) => {
    return url.slice(1);
  };

  const handleReply = () => {
    setShowReplyComponent(true);
    setIsReplyActive(true);
  };

  const handleIncrement = () => {
    setValue(value++);
  };

  const handleDecrement = () => {
    if (value != 0) {
      setValue(value--);
    }
  };

  const displayButtonBasedOnUser = (user) => {
    if (user === "juliusomo") {
      return <EditDeleteComment />;
    }
    return (
      <button
        className={getReplyButtonClasses(isReplyActive)}
        disabled={isReplyActive}
        onClick={handleReply}
      >
        <span className="inline-block mr-1">
          <img className="" src={iconReply} alt="user profile's avatar" />
        </span>
        Reply
      </button>
    );
  };

  return (
    <div className="mt-4 ml-6">
      <div className="px-4 py-6 max-w-lg mx-auto bg-white flex flex-wrap gap-1 items-center rounded-lg md:flex-col sm:p-4">
        <Counter
          value={value}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <div className="w-11/12 md:-order-1">
          <div className="flex w-full items-start -mb-3">
            <div className="grow  w-3/5 ml-3 mr-3 text-center md:order-first">
              <div className="flex justify-start gap-3 mb-5">
                <img
                  className="grow-0 h-8 rounded-full sm:ml-0"
                  src={getImageURL(image.png)}
                  alt="user profile's avatar"
                />
                <p className="font-semibold text-sm self-center">{username}</p>
                {username === "juliusomo" && (
                  <p className="text-sm text-white bg-moderateBlue px-2 m-0 h-fit self-center">
                    You
                  </p>
                )}
                <p className="text-gray-600 text-sm self-center">{createdAt}</p>
              </div>
            </div>
            {displayButtonBasedOnUser(username)}
          </div>
          <div className="grow  w-full ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-5/5">
            <p className="text-sm text-gray-600 text-start w-11/12 sm:ml-0">
              <span className="font-semibold text-sm text-moderateBlue">
                @ {replyingTo}
              </span>{" "}
              {content}
            </p>
          </div>
        </div>
      </div>
      <AddReply show={showReplyComponent} />
    </div>
  );
};

export default Reply;
