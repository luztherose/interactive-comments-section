import React from "react";
import userAvatar from "../images/avatars/image-amyrobson.png";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import iconDelete from "../images/icon-delete.svg";
import iconEdit from "../images/icon-edit.svg";

const UserCommentReply = () => {
  return (
    <section className="mt-8 p-20 bg-gray-100">
      <div className="p-5 max-w-xl mx-auto bg-white flex flex-wrap gap-1 items-start rounded-lg md:flex-col sm:p-4">
        <div className="flex-col bg-lightGray self-center px-3 py-2 rounded-lg md:self-center md:flex md:flex-row md:justify-around md:w-1/5 md:px-2 md:py-1 md:mt-2 md:ml-6 sm:w-2/5 sm:ml-1">
          <button>
            <img className="" src={iconPlus} alt="user profile's avatar" />
          </button>
          <p className="mt-2 md:mt-0 text-moderateBlue">0</p>
          <button>
            <img className="" src={iconMinus} alt="user profile's avatar" />
          </button>
        </div>
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
                <p className="text-sm text-white bg-moderateBlue px-2 m-0 h-fit">
                  You
                </p>
                <p className="text-gray-600 text-sm">1 month ago</p>
              </div>
            </div>
            <div className="w-2/5">
              <button className="w-3/5 text-sm text-softRed font-semibold md:self-end md:-mt-6">
                <span className="inline-block mr-1">
                  <img
                    className=""
                    src={iconDelete}
                    alt="user profile's avatar"
                  />
                </span>
                Delete
              </button>
              <button className="w-2/5 text-sm text-moderateBlue font-semibold md:self-end md:-mt-6">
                <span className="inline-block mr-1">
                  <img
                    className=""
                    src={iconEdit}
                    alt="user profile's avatar"
                  />
                </span>
                Edit
              </button>
            </div>
          </div>
          <div className="grow  w-full ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-5/5">
            <textarea
              className="border border-moderateBlue pt-1 pl-3 w-11/12 h-16 resize-none rounded text-sm"
              placeholder="Add a comment"
            ></textarea>
          </div>
        </div>
        <div className="flex w-full justify-end mr-3 mt-2  mb-2 text-sm md:m-0 md:w-11/12 md:-mt-3">
          <button className="grow-0 px-4 py-2 text-white font-semibold rounded-lg border bg-moderateBlue md:self-end md:-mt-6 md:mr-9 sm:mr-0 md:px-4 md:py-1">
            UPDATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserCommentReply;
