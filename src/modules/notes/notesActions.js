import shortid from 'shortid';
import * as actionTypes from './notesActionTypes';

const noteAdd = text => ({
  type: actionTypes.ADD,
  payload: { id: shortid.generate(), text, completed: false },
});

const noteDelete = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

const toggleNote = id => ({
  type: actionTypes.TOGGLE_COMPLETED,
  payload: id,
});

const changeFilter = text => ({
  type: actionTypes.CHANGE_FILTER,
  payload: text,
});

export { noteAdd, noteDelete, toggleNote, changeFilter };
