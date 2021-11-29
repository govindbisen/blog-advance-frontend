import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddBlog({ InitialBlog, setInitialBlog }) {
  const [Title, setTitle] = useState("");
  const [Img, setImg] = useState("");
  const [Description, setDescription] = useState("");

  const AddBlogHandler = () => {
    console.log("Adding movies...", Title);
    console.log("Adding movies...", Img);
    console.log("Adding movies...", Description);

    setInitialBlog([{ Title, Img, Description }, ...InitialBlog]);

    console.log(InitialBlog);
  };
  return (
    <>
      <div>
        <h3>Add Blog</h3>
      </div>
      <TextField
        fullWidth
        label="Title"
        id="fullWidth"
        type="text"
        placeholder="Add Title "
        onInput={(event) => setTitle(event.target.value)}
      />

      <br />
      <TextField
        fullWidth
        label="ImageUrl"
        id="fullWidth"
        type="text"
        placeholder="Add Image url "
        onInput={(event) => setImg(event.target.value)}
      />

      <br />
      <TextField
        fullWidth
        label="Description"
        id="fullWidth"
        type="text"
        placeholder="Add Description here ... "
        onInput={(event) => setDescription(event.target.value)}
      />
      <br />
      <Button fullWidth variant="outlined" onClick={AddBlogHandler}>
        Add Blog
      </Button>
    </>
  );
}
