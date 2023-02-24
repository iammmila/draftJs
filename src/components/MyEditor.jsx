import React, { useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';

function MyEditor() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty(),
    );

    const handleEditorChange = (newState) => {
        setEditorState(newState);
    };

    const sendContentToBackend = () => {
        const contentState = editorState.getCurrentContent();
        const contentHtml = stateToHTML(contentState);

        // send contentHtml to the backend
    };
    return (
        <div>
            <div>
                <Editor editorState={editorState} onChange={handleEditorChange} />
                <button onClick={sendContentToBackend}>Send content to backend</button>
            </div>
        </div>)
}

export default MyEditor