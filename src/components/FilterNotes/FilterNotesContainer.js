import { connect } from 'react-redux';
import FilterNotes from './FilterNotes';
import { changeFilter } from '../../modules/notes/notesActions';
import { getFilter } from '../../modules/notes/notesSelectors';

const mapStateToProps = state => ({
  value: getFilter(state),
});
const mapDispatchToProps = { onChange: changeFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterNotes);
