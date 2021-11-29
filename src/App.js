import "./App.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import React from "react";

import { Blogs } from "./Blogs";
import { useState } from "react";
import { AddBlog } from "./AddBlog";
import { ReadOneBlog } from "./ReadOneBlog";
import { EditBlog } from "./EditBlog";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { NotFound } from "./NotFound";

function App() {
  //const DATA = ["Nature", "Art", "science", "english", "maths"];

  const DATA = [
    {
      Title: "Nature",
      Img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      Description:
        "What is Nature? What is Nature? What is Nature? What is Nature? ",
    },
    {
      Title: "Lion",
      Img: "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
      Description:
        "What is lion? What is lion? What is lion? What is lion? What is lion?",
    },
    {
      Title: "Beast",
      Img: "https://wallpaperaccess.com/full/1911049.jpg",
      Description:
        "What is Beast? What is Beast? What is Beast? What is Beast? What is Beast?",
    },
    {
      Title: "Lizard",
      Img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      Description:
        "What is lizard? What is lizard? What is lizard? What is lion? What is lizard?",
    },
    {
      Title: "Lizard",
      Img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      Description:
        "What is lizard? What is lizard? What is lizard? What is lion? What is lizard?",
    },
    {
      Title: "Lizard",
      Img: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      Description:
        "What is lizard? What is lizard? What is lizard? What is lion? What is lizard?",
    },
  ];
  const [InitialBlog, setInitialBlog] = useState(DATA);

  return (
    <div className="App">
      <div className="navigation bar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/addblog">Add Blog</Link>
          <Link to="/otherblog">Redirected...</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/otherblog" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <Home InitialBlog={InitialBlog} setInitialBlog={setInitialBlog} />
          }
        />
        <Route
          path="/blog/:id"
          element={<ReadOneBlog InitialBlog={InitialBlog} />}
        />
        <Route
          path="/blog/edit/:id"
          element={
            <EditBlog
              InitialBlog={InitialBlog}
              setInitialBlog={setInitialBlog}
            />
          }
        />
        <Route
          path="addblog"
          element={
            <AddBlog
              InitialBlog={InitialBlog}
              setInitialBlog={setInitialBlog}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

function Home({ InitialBlog, setInitialBlog }) {
  let navigate = useNavigate();
  return (
    <>
      <main>
        <h2>Plear Read The blog of your choice!! </h2>
        <p>You can do this, I believe in you. I know you will enjoy.</p>
        <div className="container">
          {InitialBlog.map((blog, id) => (
            <Blogs
              key={id}
              id={id}
              title={blog.Title}
              img={blog.Img}
              description={blog.Description}
              editButton={
                <EditIcon
                  style={{ marginLeft: "20px" }}
                  onClick={() => navigate(`blog/edit/${id}`)}
                />
              }
              deleteButton={
                <DeleteIcon
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    console.log("id to delete", id);
                    const remainBlog = InitialBlog.filter(
                      (b, idx) => idx !== id
                    );
                    console.log(remainBlog);
                    setInitialBlog(remainBlog);
                  }}
                />
              }
            />
          ))}
        </div>
      </main>
    </>
  );
}
