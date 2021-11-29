import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";

export function EditBlog({ InitialBlog, setInitialBlog }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [Title, setTitle] = useState(InitialBlog[id].Title);
  const [Img, setImg] = useState(InitialBlog[id].Img);
  const [Description, setDescription] = useState(InitialBlog[id].Description);

  console.log(id);
  console.log("pagal hai kya");
  console.log(InitialBlog[0]);

  const updateBlogHandler = () => {
    // console.log("Adding movies...", Title);
    // console.log("Adding movies...", Img);
    // console.log("Adding movies...", Description);

    const updatedBlog = { Title, Img, Description };
    const copyOfInitialBlog = [...InitialBlog];
    copyOfInitialBlog[id] = updatedBlog;
    setInitialBlog(copyOfInitialBlog);

    navigate("/");

    // const newBlog = { Title, Img, Description }
    //setInitialBlog([newBlog, ...InitialBlog]);
  };
  return (
    <>
      <div>
        <h3>Add Blog</h3>
      </div>
      <TextField
        value={Title}
        fullWidth
        label="Title"
        id="fullWidth"
        type="text"
        placeholder="Add Title "
        onInput={(event) => setTitle(event.target.value)}
      />

      <br />
      <TextField
        value={Img}
        fullWidth
        label="ImageUrl"
        id="fullWidth"
        type="text"
        placeholder="Add Image url "
        onInput={(event) => setImg(event.target.value)}
      />

      <br />
      <TextField
        value={Description}
        fullWidth
        label="Description"
        id="fullWidth"
        type="text"
        placeholder="Add Description here ... "
        onInput={(event) => setDescription(event.target.value)}
      />
      <br />
      <Button fullWidth variant="outlined" onClick={updateBlogHandler}>
        Save
      </Button>
    </>
  );
}
