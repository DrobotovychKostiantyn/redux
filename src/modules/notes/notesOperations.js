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

const fetchToggleNote = id => async dispatch => {
  dispatch(actions.fetchRequest());
  let get;

  try {
    get = await axios.get(`http://localhost:3001/notes/${id}`);
  } catch (error) {
    dispatch(actions.fetchError(error));
  }

  try {
    await axios.patch(`http://localhost:3001/notes/${id}`, {
      ...get.data,
      completed: !get.data.completed,
    });
    dispatch(actions.toggleSuccess(id));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};
export { fetchNotes, fetchAddNote, fetchDeleteNote, fetchToggleNote };
