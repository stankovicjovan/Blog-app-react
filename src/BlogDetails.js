import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:6500/blogs/${id}`);

  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:6500/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('Blog deleted');
      //
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <h3>Loading...</h3>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
