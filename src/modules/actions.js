import { normalize } from 'normalizr';
import schema from './schemas/index';

export const actionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  DELETE_POST: 'DELETE_POST',
  ADD_POST: 'ADD_POST',
  SELECT_AUTHOR: 'SELECT_AUTHOR',
};

export const fetchPosts = posts => {
  const normal = normalize(posts, [schema]);

  return {
    type: actionTypes.FETCH_POSTS,
    payload: {
      ids: {
        posts: Object.keys(normal.entities.posts),
        authors: Object.keys(normal.entities.authors),
      },
      entities: normal.entities,
    },
  };
};

export const deletePost = id => ({
  type: actionTypes.DELETE_POST,
  payload: id,
});

export const selectAuthor = id => ({
  type: 'SELECT_AUTHOR',
  payload: id,
});

// export const addPost = () => ({
//     type: actionTypes.ADD_POST,
//     payload: {
//         ids: {
//             posts: ['cool-id'],
//         },
//         entities: {
//             posts: {
//                 'cool-id': { id: 'cool-id', title: 'title!' },
//             },
//         },
//     },
// });
