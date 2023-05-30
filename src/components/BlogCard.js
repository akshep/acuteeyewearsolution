import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.png" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 May, 2023</p>
        <h5 className="title">#MomentsThatMatter | Sandeep Gupta, Online Marketplace</h5>
        <p className="desc">
        Sandeep joined us back in April, 2014 at an Executive level in the Order Management Team. Hailing from Delhi, he completed his schooling and graduated from the city to start with an E-commerce player in his first job.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
