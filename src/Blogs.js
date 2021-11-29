import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import { useNavigate } from "react-router-dom";

export function Blogs({
  title,
  img,
  description,
  id,
  deleteButton,
  editButton,
}) {
  const [showDescription, setshowDescription] = useState(false);
  const [buttonText, setbuttonText] = useState("Show more!! ");

  function buttonHandleClick() {
    setshowDescription(!showDescription);
    setbuttonText(showDescription ? "Show more" : "Show less");
  }

  const navigate = useNavigate();
  return (
    <div className="blog_card" key={id}>
      <img
        className="blog_img"
        src={img}
        width="100px"
        height="100px"
        alt={title}
      />
      <h1>{title}</h1>
      <div>
        <ReadMoreIcon
          onClick={() => {
            navigate(`/blog/${id}`);
          }}
        />
        {editButton}
        {deleteButton}
      </div>

      <Button variant="outlined" onClick={buttonHandleClick}>
        {buttonText}
      </Button>
      {showDescription ? <p> {description} </p> : ""}
    </div>
  );
}
