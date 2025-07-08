import React, { useState, useEffect } from "react";
import "./StickyNotesApp.css"; // Custom CSS file

const getRandomColor = () => {
  const colors = ["#FFD700", "#98FB98", "#FFB6C1", "#ADD8E6", "#E6E6FA", "#FFA07A"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const StickyNotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("sticky-notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    localStorage.setItem("sticky-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!noteInput.trim()) return;
    const newNote = {
      id: Date.now(),
      text: noteInput,
      color: getRandomColor(),
    };
    setNotes([newNote, ...notes]);
    setNoteInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>🗒️ Sticky Notes</h1>
      <div className="note-input">
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Write your note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note" style={{ backgroundColor: note.color }}>
            <button className="delete-btn" onClick={() => deleteNote(note.id)}>×</button>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNotesApp;
