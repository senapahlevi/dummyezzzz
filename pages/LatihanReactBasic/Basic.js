import React, { useEffect, useState } from "react";
import ListBasic from "./ListBasic";

const Basic = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("da");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  //     console.log("use effect run gan!");
  //     console.log(blogs);
  //   }, [name]); //ini ada [] jadi fungsi nya untuk dia jalanin cuma 1x render aja bukan berkali kali(infinite loop gitu jadinya absurd)
  return (
    <div>
      {blogs && <ListBasic blogs={blogs} title="All Blogs" handleDelete={handleDelete} />} <button onClick={() => setName("bambang")}>Hallo ganti from basic</button>
      <p>{name}</p>
    </div>
  );
};

export default Basic;
