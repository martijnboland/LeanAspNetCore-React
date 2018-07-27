import axios from 'axios';
import { handleApiSuccess, handleApiError, IApiResult } from '../shared/api';
import { Note } from './models';

const notesApiUrl = '/api/notes';

export const getNotes = (): Promise<Note[]> => {
  return axios.get<Note[]>(notesApiUrl)
    .then(response => response.data);
};

export const addNote = (note: Note): Promise<IApiResult> => {
  return axios.post(notesApiUrl, note)
    .then(handleApiSuccess)
    .catch(handleApiError);
}

export const deleteNote = (id: string): Promise<IApiResult> => {
  return axios.delete(`${notesApiUrl}/${id}`)
    .then(handleApiSuccess)
    .catch(handleApiError);
}