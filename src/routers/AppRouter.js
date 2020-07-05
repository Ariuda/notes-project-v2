import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import DashboardPage from '../components/DashboardPage';
import SignIn from '../components/auth/SignIn';
import Register from '../components/auth/Register';
import CalendarView from '../components/calendar/CalendarView';
import CategoriesView from '../components/categories/CategoriesView';
import AddNotePage from '../components/AddNotePage';
import EditNotePage from '../components/EditNotePage';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <Nav />
        <Switch>
            <Route path ="/" component={DashboardPage} exact={true}/>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/register" component={Register} />
            <Route path="/calendar" component={CalendarView} />
            <Route path="/categories" component={CategoriesView} />
            <Route path="/add" component={AddNotePage} />
            <Route path="/edit" component={EditNotePage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;