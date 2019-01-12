import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { fetchAddNote } from '../../modules/notes/notesOperations';

const mapDispatchToProps = { fetchAddNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
