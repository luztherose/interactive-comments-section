export const updateComment = (comments, updatedComment) => {
  const updaptedComments = comments.map((comment) => {
    if (comment.id === updatedComment.id) {
      return updatedComment;
    } else {
      return comment;
    }
  });
  return updaptedComments;
};
