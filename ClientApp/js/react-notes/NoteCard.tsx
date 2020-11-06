import * as React from 'react';
import { Note } from './models';

interface NoteCardProps {
  note: Note,
  handleDelete: (note: Note) => Promise<any>
}

const NoteCard: React.FC<NoteCardProps> = ({ note, handleDelete }) => {
  const createdAtString = new Date(note.createdAt).toLocaleString();
  return (
    <div className="card mb-4">
      <div className="card-header">
      <button type="button" className="close" aria-label="Close" onClick={() => handleDelete(note)}>
        <span aria-hidden="true">&times;</span>
      </button>
        {note.title}
      </div>
      <div className="card-body">
        <pre className="card-text">{note.content}</pre>
        <small className="text-primary">{createdAtString}</small>
      </div>
    </div>
  );
};

export default NoteCard;