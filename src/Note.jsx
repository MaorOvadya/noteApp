import { useEffect, useState } from "react";

import { FaTrash } from "react-icons/fa";

export default function Note() {
  const [noteData, setNoteData] = useState(() => {
    const savedNote = localStorage.getItem("noteData");
    return savedNote ? JSON.parse(savedNote) : [];
  });

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  useEffect(() => {}, [titleError, bodyError]);

  useEffect(() => {
    localStorage.setItem("noteData", JSON.stringify(noteData));
  }, [noteData]);

  const handleDelete = (DeleteIndex) => {
    const updatedNotes = noteData.filter((_, index) => index !== DeleteIndex);
    setNoteData(updatedNotes);
  };

  const handleInputChnageError = (field) => {
    switch (field) {
      case "title":
        setTitleError("");
        break;
      case "body":
        setBodyError("");
        break;

      default:
        break;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    // reset Values to empty string
    setTitle("");
    setBody("");
    setBodyError("");
    setTitleError("");

    // validation logic with regex
    const titleRegex = /^[a-zA-Z]{2,}$/;
    const bodyRegex = /^.{2,}$/;

    let hasError = false;

    if (!titleRegex.test(title)) {
      setTitleError("title is missing and cannot contain numbers");
      hasError = true;
    }
    if (!bodyRegex.test(body)) {
      setBodyError("text is missing");
      hasError = true;
    }

    if (!hasError) {
      setNoteData([...noteData, { title: title, body: body }]);
    }
  }

  return (
    <>
      <h1 className="logo">my notes</h1>
      <div className="main_container">
        <form onSubmit={handleSubmit} className="note-submission">
          <div>
            <h1 className="note_header">new note</h1>
          </div>
          <label className="label" htmlFor="title">
            title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => handleInputChnageError("title")}
            className="text_title"
            type="text"
            id="title"
            name="title"
            value={title}
            minLength={1}
            placeholder="enter title"
          />
          <p className="error">{titleError}</p>
          <label className="label" htmlFor="body">
            note
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            onFocus={() => handleInputChnageError("body")}
            className="text_body"
            type="text"
            id="body"
            name="body"
            value={body}
            rows={10}
            minLength={1}
            placeholder="enter note"
          />
          <p className="error">{bodyError ? bodyError : null}</p>
          <div>
            <button className="add_btn">add</button>
          </div>
        </form>
        <div className="containerNotes">
          <p className="containerNotesTitle">notes</p>
          {loading ? (
            <p className="loading">Loading notes...</p>
          ) : noteData.length === 0 ? (
            <p className="loading">No notes to show</p>
          ) : (
            noteData.map((note, index) => (
              <div key={index} className="note_continer">
                <article className="note_article">
                  <p className="title">{note.title}</p>
                  <p className="body">{note.body}</p>
                </article>
                <p className="trash">
                  <FaTrash onClick={() => handleDelete(index)} />
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
