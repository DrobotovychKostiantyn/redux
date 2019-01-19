import { createSelector } from 'reselect';

const getIdsAuthors = state => state.authors;

export const getEntitiesAuthors = state => state.entities.authors;

// export const getAllAuthors = state => {
//   const ids = getIdsAuthors(state);
//   const authorsEnt = getEntitiesAuthors(state);

//   return ids.length > 0 ? ids.map(id => authorsEnt[id]) : [];
// };

export const getAllAuthors = createSelector(
  [getIdsAuthors, getEntitiesAuthors],
  (ids, authorsEnt) => (ids.length > 0 ? ids.map(id => authorsEnt[id]) : []),
);

export const getEntitiesPosts = state => state.entities.posts;

export const getSelectAuthorId = state => state.id;

const getPostsIds = state => state.posts;

export const getPostsByAuthor = createSelector(
  [getEntitiesPosts, getPostsIds, getSelectAuthorId],
  (postsEntities, postIds, authorId) =>
    postIds.reduce((acc, postId) => {
      const posts = postsEntities[postId];

      if (posts.author === authorId) {
        acc.push(posts);
      }
      return acc;
    }, []),
);

// export const getPostsByAuthor = state => {
//   const postsEntities = getEntitiesPosts(state);
//   const postIds = getPostsIds(state);
//   const authorId = getSelectAuthorId(state);

//   return postIds.reduce((acc, postId) => {
//     const posts = postsEntities[postId];

//     if (posts.author === authorId) {
//       acc.push(posts);
//     }
//     return acc;
//   }, []);
// };
