import { connect } from 'react-redux';
import NoteList from './NotesList';
import { getFilteredNotes } from '../../modules/notes/notesSelectors';
import { noteDelete, toggleNote } from '../../modules/notes/notesActions';

const mapStateToProps = state => ({
  notes: getFilteredNotes(state),
});

const mapDispatchToProps = { noteDelete, toggleNote };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
