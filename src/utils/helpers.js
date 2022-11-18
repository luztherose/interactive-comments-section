export const getButtonClasses = (isActive, isCommentUpdated = false) => {
  let classes =
    "w-2/5 text-sm font-semibold md:self-end md:-mt-6  hover:text-lightGrayishBlue md:absolute md:right-0 md:-bottom-10";
  if (!isActive || isCommentUpdated) {
    return (classes += " text-moderateBlue");
  }
  return (classes += " text-lightGrayishBlue");
};
