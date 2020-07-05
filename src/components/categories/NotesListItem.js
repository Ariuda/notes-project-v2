import React from 'react';
import { Link } from 'react-router-dom';

export const NotesListItem = () => (
    <div>
        Notes list item
        <Link to="/edit">Edit note</Link>
    </div>
);

export default NotesListItem;