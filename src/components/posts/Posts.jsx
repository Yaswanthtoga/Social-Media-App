import React from 'react'
import "./Posts.scss";
import posts from "./dummyPosts.js";
import Post from '../post/Post';

const Posts = () => {
  return (
    <div className='posts'>
      {
        posts.map(post=>(
          <Post
            post={post}
            key={post.id}
          />
        ))
      }
    </div>
  )
}

export default Posts