import * as actionTypes from './notesActionTypes';

// const noteAdd = text => ({
//   type: actionTypes.ADD_SUCCESS,
//   payload: { id: shortid.generate(), text, completed: false },
// });

// const noteDelete = id => ({
//   type: actionTypes.DELETE_SUCCESS,
//   payload: id,
// });

// const toggleNote = id => ({
//   type: actionTypes.TOGGLE_COMPLETED_SUCCESS,
//   payload: id,
// });

const changeFilter = text => ({
  type: actionTypes.CHANGE_FILTER,
  payload: text,
});

const fetchRequest = () => ({
  type: actionTypes.FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: notes,
});

const addSuccess = note => ({
  type: actionTypes.ADD_SUCCESS,
  payload: note,
});

const fetchError = error => ({
  type: actionTypes.FETCH_ERROR,
  payload: error,
});

const deleteSuccess = id => ({
  type: actionTypes.DELETE_SUCCESS,
  payload: id,
});

const toggleSuccess = id => ({
  type: actionTypes.TOGGLE_COMPLETED_SUCCESS,
  payload: id,
});

export {
  addSuccess,
  deleteSuccess,
  toggleSuccess,
  changeFilter,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
