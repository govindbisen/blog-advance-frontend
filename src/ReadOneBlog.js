import React from "react";
import { useParams } from "react-router-dom";

export function ReadOneBlog({ InitialBlog }) {
  const { id } = useParams();
  const selectedBlog = InitialBlog[id];
  console.log(selectedBlog);

  return (
    <>
      <h1>{selectedBlog.Title}</h1>
      <img src={selectedBlog.Img} alt={selectedBlog.Title} />
      <p>{selectedBlog.Description}</p>
    </>
  );
}
