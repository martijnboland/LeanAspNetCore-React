using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace LeanAspNetCore.Api.Notes
{
    /// <summary>
    /// Simple in-memory notes store. Strictly for demo purposes, absolutely not thread-safe.
    /// </summary>
    public class NotesStore
    {
        private List<Note> _notes;

        public NotesStore()
        {
            this._notes = new List<Note>();
        }

        public IEnumerable<Note> GetAll()
        {
            return _notes;
        }

        public Note AddNote(Note note)
        {
            if (note.Id != null)
            {
                throw new Exception("Cannot add note with an existing id");
            }
            note.Id = Guid.NewGuid().ToString();
            note.CreatedAt = DateTime.Now;
            _notes.Add(note);
            return note;
        }

        public void RemoveNote(string noteId)
        {
            _notes.RemoveAll(n => n.Id == noteId);
        }
    }
}