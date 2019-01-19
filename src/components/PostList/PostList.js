import React from 'react';
import Post from '../Post/Post';
import s from './PostList.module.css';

const PostList = ({ posts, onDelete }) =>
  posts.length > 0 ? (
    <ul className={s.list}>
      {posts.map(post => (
        <li key={post.id} className={s.item}>
          <Post {...post} deletePost={() => onDelete(post.id)} />
        </li>
      ))}
    </ul>
  ) : null;

export default PostList;
