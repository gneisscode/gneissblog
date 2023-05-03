import React, { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../context/Context";
import { Cloudinary } from "cloudinary-core";
const apiUrl = "https://api.cloudinary.com/v1_1/dosj9cjie;";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "gcgkvjtf");
      console.log(formData);
      console.log(file);

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dosj9cjie/image/upload/",
          formData
        );
        const photoUrl = response.data.secure_url;
        console.log(photoUrl);
        newPost.photo = photoUrl;
        const res = await axios.post("/posts", newPost);
        window.location.replace("/gneissblog/post/" + res.data._id);
  
      } catch (error) {
        console.error(error);
      }
    }
    
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
