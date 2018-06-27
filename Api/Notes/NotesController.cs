using System;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LeanAspNetCore.Api.Notes
{
    [Route("api/notes")]
    [Authorize]
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
            string userId = GetUserId();
            _logger.LogDebug($"User ID: {userId}");
            var notes = _notesStore.GetAllByUser(userId);
            return base.Ok(notes);
        }
        
        [HttpPost]
        public IActionResult Add([FromBody]Note note)
        {
            if (ModelState.IsValid)
            {
                var userId = GetUserId();
                note = _notesStore.AddNote(userId, note);
                return Created($"api/notes/{note.Id}", note);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{noteId}")]
        public IActionResult Remove(string noteId)
        {
            var userId = GetUserId();
            _notesStore.RemoveNote(userId, noteId);
            return NoContent();
        }

        private string GetUserId()
        {
            return User.FindFirst("sub").Value;
        }

    }
}