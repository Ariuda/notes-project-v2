import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardLinks = () => (
    <div>
        <Link to="/categories">Categories</Link>
        <Link to="/calendar">Calendar</Link>
    </div>
);

export default DashboardLinks;