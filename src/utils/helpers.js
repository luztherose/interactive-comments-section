export const getImageURL = (url) => {
  return url.slice(1);
};

export const getButtonClasses = (isActive) => {
  let classes = "w-2/5 text-sm font-semibold md:self-end md:-mt-6";
  if (!isActive) {
    return (classes += " text-moderateBlue");
  }
  return (classes += " text-lightGrayishBlue");
};
