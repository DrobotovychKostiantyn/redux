import { schema } from 'normalizr';

const authorSchema = new schema.Entity('authors');

const PostSchema = new schema.Entity('posts', {
  author: authorSchema,
});

export default PostSchema;
