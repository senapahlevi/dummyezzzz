import React from "react";

const ListBasic = ({ blogs, title, handleDelete }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <h1 className="text-blue-600">Pengajuan Asuransi</h1>

          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default ListBasic;
