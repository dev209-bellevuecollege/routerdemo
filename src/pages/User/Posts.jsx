import React from 'react';
import { useParams } from 'react-router-dom';

const UserPosts = () => {
  const { userId } = useParams();

  // Simulated posts data
  const posts = [
    { id: 1, title: `Post 1 by user ${userId}` },
    { id: 2, title: `Post 2 by user ${userId}` },
    { id: 3, title: `Post 3 by user ${userId}` }
  ];

  return (
    <div>
      <h2>Posts by User {userId}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;