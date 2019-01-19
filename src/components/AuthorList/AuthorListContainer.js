import { connect } from 'react-redux';
import AuthorList from './AuthorList';
import { getAllAuthors, getSelectAuthorId } from '../../modules/selectors';
import * as actions from '../../modules/actions';

const mapStateToProps = state => ({
  authors: getAllAuthors(state),
  activeAuthor: getSelectAuthorId(state),
});
const mapDispatch = { activeAuthorId: actions.selectAuthor };

export default connect(
  mapStateToProps,
  mapDispatch,
)(AuthorList);
