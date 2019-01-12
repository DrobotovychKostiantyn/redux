import { connect } from 'react-redux';
import React, { Component } from 'react';
import NoteList from './NotesList';
import { getFilteredNotes } from '../../modules/notes/notesSelectors';
import {
  fetchNotes,
  fetchDeleteNote,
  fetchToggleNote,
} from '../../modules/notes/notesOperations';

class NoteListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return <NoteList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notes: getFilteredNotes(state),
});

const mapDispatchToProps = { fetchDeleteNote, fetchToggleNote, fetchNotes };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);
