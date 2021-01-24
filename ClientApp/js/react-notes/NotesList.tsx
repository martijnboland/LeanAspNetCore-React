import React from 'react';
import { Note } from './models';
import NoteCard from './NoteCard';
import emptyFolder from '../../images/empty-folder.png';

interface NotesListProps {
  notes: Note[],
  handleDelete: (note: Note) => Promise<any>
}

const NotesList: React.FC<NotesListProps> = ({ notes, handleDelete }) => {
  return (
    notes.length > 0 
      ? 
      <div>
        {notes.map(n => <NoteCard key={n.id} note={n} handleDelete={handleDelete} />)}    
      </div>
      :
      <div>
        <div className="mb-1">
          <img src={emptyFolder} width={125} height={125} />
        </div>
        <em>There are currently no notes</em>
      </div>
  );
};

export default NotesList;