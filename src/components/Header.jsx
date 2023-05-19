import React from "react";
import "./styles.css";
import NoteIcon from '@mui/icons-material/Note';

function Header() {
    return (
        <header>
            <h1><NoteIcon /> Note Keeper</h1>
        </header>);
}

export default Header;