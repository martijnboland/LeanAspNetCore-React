using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LeanAspNetCore.Api.Notes
{
    [Route("api/notes")]
    public class NotesController : Controller
    {
        private ILogger<NotesController> _logger;
        private NotesStore _notesStore;

        public NotesController(ILogger<NotesController> logger, NotesStore notesStore)
        {
             _logger = logger;
             _notesStore = notesStore;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var notes = _notesStore.GetAll().OrderByDescending(n => n.CreatedAt);
            return Ok(notes);
        }
        
        [HttpPost]
        public IActionResult Add([FromBody]Note note)
        {
            if (ModelState.IsValid)
            {
                note = _notesStore.AddNote(note);
                return Created($"api/notes/{note.Id}", note);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{noteId}")]
        public IActionResult Remove(string noteId)
        {
            _notesStore.RemoveNote(noteId);
            return NoContent();
        }
    }
}