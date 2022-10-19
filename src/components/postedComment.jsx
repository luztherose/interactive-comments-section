import React, { useState } from "react";
import userAvatar from "../images/avatars/image-amyrobson.png";
import iconReply from "../images/icon-reply.svg";
import Counter from "./counter";
import EditDeleteComment from "./editDeleteComment";
import AddReplyComment from "./addReplyComment";

const getReplyButtonClasses = (isReplyActive) => {
  let classes = "w-2/5 text-sm font-semibold self-start md:-mt-6";
  if (!isReplyActive) {
    return (classes += " text-moderateBlue");
  }
  return (classes += " text-lightGrayishBlue");
};

const PostedComment = (user) => {
  const [isReplyActive, setIsReplyActive] = useState(false);
  const [showReplyComponent, setShowReplyComponent] = useState(false);
  let [value, setValue] = useState(0);

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
    }else {
        setValue(0);
    } 
  };

  const displayButtonBasedOnUser = (user) => {
    if (user === "you") {
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
    <section className="mt-8">
      <div className="px-5 py-8 max-w-xl mx-auto bg-white flex flex-wrap gap-1 items-start rounded-lg md:flex-col sm:p-4">
        <Counter
          value={value}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <div className="w-11/12 md:-order-1">
          <div className="flex w-full">
            <div className="grow  w-3/5 ml-3 mr-3 text-center md:order-first">
              <div className="flex justify-start gap-3 mb-5">
                <img
                  className="grow-0 h-8 rounded-full sm:ml-0"
                  src={userAvatar}
                  alt="user profile's avatar"
                />
                <p className="font-semibold text-sm">amyrobson</p>
                {user === "you" && (
                  <p className="text-sm text-white bg-moderateBlue px-2 m-0 h-fit">
                    You
                  </p>
                )}
                <p className="text-gray-600 text-sm">1 month ago</p>
              </div>
            </div>
            {displayButtonBasedOnUser("")}
          </div>
          <div className="grow  w-full ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-5/5">
            <p className="text-sm text-gray-600 text-start w-11/12 ml-6 sm:ml-0">
              Impressive! Though, it seems like the drag feature could be
              improve. But overall it looks incredible. You've nailed the design
              and the responsiveness at various breakpoints works really well.
            </p>
          </div>
        </div>
      </div>
      <AddReplyComment show={showReplyComponent} />
    </section>
  );
};

export default PostedComment;
