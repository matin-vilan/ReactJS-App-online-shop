import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  let { id } = useParams();
  
  return (
    <div className="postDetails">
      <PostDetails id={id} />
    </div>
  );
};

export default PostDetails;
