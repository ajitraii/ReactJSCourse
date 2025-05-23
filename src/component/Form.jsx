import React, { useEffect, useState } from "react";
import { addPost } from "../api/ApiClient";

const Form = (props) => {
  const { allPosts, setAllPosts, editedPost, setEditedPost } = props;
  console.log("editedPost", editedPost);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (editedPost) {
      setFormData((prev) => ({
        ...prev,
        title: editedPost.title,
        content: editedPost.content,
      }));
    }
  }, [editedPost]);

  const handleChangeText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      id: Date.now(),
    };
    const res = await addPost("/posts", payload);
    console.log("addUser", res);
  };
  return (
    <form action="" onSubmit={onHandleSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter title here"
          value={formData.title}
          onChange={handleChangeText}
        />
      </div>
      <div>
        <label htmlFor="content"></label>
        <input
          type="text"
          id="content"
          name="content"
          placeholder="Enter content here"
          value={formData.content}
          onChange={handleChangeText}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
