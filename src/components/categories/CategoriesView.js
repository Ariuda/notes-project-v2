import React from 'react';
import CategoriesList from './CategoriesList';
import NotesList from './NotesList';

export const CategoriesView = () => (
    <div>
        Categories View
        <CategoriesList />
        <NotesList />
    </div>
);

export default CategoriesView;