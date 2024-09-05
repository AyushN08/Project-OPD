import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <section className="blog-post">
        <h2>Latest Trends in Healthcare Technology</h2>
        <p>Discover the newest advancements and trends in healthcare technology that are shaping the future.</p>
      </section>
      <section className="blog-post">
        <h2>How to Book Appointments Efficiently</h2>
        <p>Learn tips and tricks for booking your medical appointments more effectively.</p>
      </section>
    </div>
  );
};

export default Blog;
