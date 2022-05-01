import React from "react";
import { useParams } from "react-router-dom";
import PostDetailsContainer from "../../../components/desktop/PostDetails/PostDetailsContainer";

const PostDetails = () => {
  let { id } = useParams();

  return (
    <div className="postDetails">
      <PostDetailsContainer id={id} />
    </div>
  );
};

export default PostDetails;
