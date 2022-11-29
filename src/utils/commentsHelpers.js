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

export const updateReply = (comment, updatedReply) => {
  const getUpdatedReply = (comment) => {
    return comment.replies.map((reply) => {
      if (reply.id === updatedReply.id) {
        return updatedReply;
      } else {
        return reply;
      }
    });
  };
  return { ...comment, replies: getUpdatedReply(comment) };
};
