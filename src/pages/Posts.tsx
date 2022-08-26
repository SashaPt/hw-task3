import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { IPost } from '../components/Users/IUser';
import http from '../http';

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await http.get('posts');
      setPosts(fetchedPosts.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {posts.length ? (
        posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <strong>
                {post.id}. {post.name}
              </strong>
              <div>{post.pantone_value}</div>
            </div>
          </div>
        ))
      ) : (
        <Loader color="text-secondary" />
      )}
    </div>
  );
};

export default Posts;
