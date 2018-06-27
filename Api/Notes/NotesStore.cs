using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace LeanAspNetCore.Api.Notes
{
    /// <summary>
    /// Simple in-memory notes store.
    /// </summary>
    public class NotesStore
    {
        private ConcurrentDictionary<string, List<Note>> _notes;

        public NotesStore()
        {
            this._notes = new ConcurrentDictionary<string, List<Note>>();
        }

        public List<Note> GetAllByUser(string userId)
        {
            return _notes.GetOrAdd(userId, new List<Note>());
        }

        public Note AddNote(string userId, Note note)
        {
            if (note.Id != null)
            {
                throw new Exception("Cannot add note with an existing id");
            }
            var notes = GetAllByUser(userId);
            note.Id = Guid.NewGuid().ToString();
            note.CreatedAt = DateTime.Now;
            notes.Add(note);
            return note;
        }

        public void RemoveNote(string userId, string noteId)
        {
            var notes = GetAllByUser(userId);
            notes.RemoveAll(n => n.Id == noteId);
        }
    }
}