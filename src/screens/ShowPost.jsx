import React, { useEffect, useState } from "react";
import { getPost } from "../api/ApiClient";
import Post from "../component/Post";

const ShowPost = () => {
  const [allPosts, setAllPosts] = useState([]);
  const getAllPost = async () => {
    try {
      const res = await getPost("/posts");
      if (res && res.status == 200) {
        setAllPosts(res.data);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      alert("something went wrong", error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <section className="main-section">
      <Post allPosts={allPosts} setAllPosts={setAllPosts} />
    </section>
  );
};

export default ShowPost;
