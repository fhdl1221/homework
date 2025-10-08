import React, { useEffect, useState } from "react";
import { postsAPI } from "../../api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await postsAPI.getPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-2 m-2">
      <h2 className="text-2xl mb-4">Posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="border-b-2 border-blue-300 p-2">
              <p className="text-xl font-bold">Post {post.id}</p>
              <p className="text-lg">&lt;{post.title}&gt;</p>
              <p className="bg-gray-200">{post.body}</p>
              <p className="text-gray-500">
                {post.tags.map((tag) => `#${tag} `)}
              </p>
              <p>
                <span className="text-blue-400">likes</span>{" "}
                {post.reactions.likes} /{" "}
                <span className="text-red-400">dislikes</span>{" "}
                {post.reactions.dislikes}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
