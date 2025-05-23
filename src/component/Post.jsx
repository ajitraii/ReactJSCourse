import React, { useState } from "react";
import Form from "./Form";

const Post = (props) => {
  const { allPosts, setAllPosts } = props;
  const [editedPost, setEditedPost] = useState([]);
  const onHandleEdit = (item) => {
    setEditedPost(item);
  };

  return (
    <>
      <section className="section-form">
        <Form
          allPosts={allPosts}
          setAllPosts={setAllPosts}
          editedPost={editedPost}
          setEditedPost={setEditedPost}
        />
      </section>
      <section className="section-post">
        <ol>
          {allPosts?.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.title}</p>
                <p>{item.content}</p>
                <button
                  onClick={() => {
                    onHandleEdit(item);
                  }}
                >
                  edit
                </button>
                <button className="btn-delete">delete</button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default Post;
