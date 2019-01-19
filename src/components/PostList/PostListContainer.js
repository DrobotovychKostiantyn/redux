import { connect } from 'react-redux';
import PostList from './PostList';
import { getPostsByAuthor } from '../../modules/selectors';
import { deletePost } from '../../modules/actions';

const mapState = state => ({
  posts: getPostsByAuthor(state),
});

const mapDispatch = { onDelete: deletePost };

export default connect(
  mapState,
  mapDispatch,
)(PostList);
