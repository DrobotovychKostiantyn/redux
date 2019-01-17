import axios from 'axios';
import * as actions from './notesActions';

const URL_NOTES = 'http://localhost:3001/notes';

const fetchNotes = () => dispatch => {
  dispatch(actions.fetchRequest());
  axios
    .get(URL_NOTES)
    .then(response => {
      dispatch(actions.fetchSuccess(response.data));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const fetchAddNote = note => dispatch => {
  dispatch(actions.fetchRequest());
  axios
    .post(URL_NOTES, note)
    .then(response => {
      dispatch(actions.addSuccess(response.data));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const fetchDeleteNote = id => dispatch => {
  dispatch(actions.fetchRequest());
  axios
    .delete(`${URL_NOTES}/${id}`)
    .then(() => {
      dispatch(actions.deleteSuccess(id));
    })
    .catch(error => dispatch(actions.fetchError(error)));
};

const fetchToggleNote = (id, item) => async dispatch => {
  dispatch(actions.fetchRequest());

  try {
    await axios.patch(`http://localhost:3001/notes/${id}`, {
      ...item,
      completed: !item.completed,
    });
    dispatch(actions.toggleSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
export { fetchNotes, fetchAddNote, fetchDeleteNote, fetchToggleNote };
