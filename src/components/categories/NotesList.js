import React from 'react';
import NotesListItem from './NotesListItem';
import { Link } from 'react-router-dom';

export const NotesList = () => (
    <div>
        Notes List
        <Link to="/add">Add note</Link>
        <NotesListItem />
    </div>

);

export default NotesList;