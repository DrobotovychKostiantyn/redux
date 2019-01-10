import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { noteAdd } from '../../modules/notes/notesActions';

const mapDispatchToProps = { noteAdd };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
