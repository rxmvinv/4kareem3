import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import MainContent from './components/MainContent';
import { Main as MainLayout } from './components/layouts/';
import MenuView from './components/MenuView';
import AboutView from './components/AboutView';
import AppsView from './components/AppsView';
import StreamView from './components/StreamView';
import ShareView from './components/ShareView';
import RouteWithLayout from './components/RouteWithLayout';
// import { checkAuthentication } from "./store/actionCreators/authentication";
// import t from './config/translations';

const Routes = ({ }) => {
    // const dispatch = useDispatch();
    // const authData = useSelector(state => state.authData);
    // const messagesOpened = useSelector(state => state.messagesOpened);

    // const authCheck = () => {
    //     if (localStorage.authenticationData) {
    //         dispatch(checkAuthentication());
    //     }
    // };

    // useEffect(() => {
    //     authCheck();
    //     if (!localStorage.language) {
    //         localStorage.setItem('language', 'eng');
    //     }
    //     t.setLanguage(localStorage.language);
    // }, []);

    // useEffect(() => {
    //     if (authData.authenticated) {
    //         startMessageFetching();
    //     }
    // }, [authData.authenticated]);

    return (
        <div className="App">
            <React.Fragment>
                <MainContent />
                <Switch>
                    <RouteWithLayout
                        component={MenuView}
                        exact
                        layout={MainLayout}
                        path={`/menu`}
                    />
                    <RouteWithLayout
                        component={AboutView}
                        exact
                        layout={MainLayout}
                        path={`/about`}
                    />
                    <RouteWithLayout
                        component={AppsView}
                        exact
                        layout={MainLayout}
                        path={`/apps`}
                    />
                    <RouteWithLayout
                        component={StreamView}
                        exact
                        layout={MainLayout}
                        path={`/stream`}
                    />
                    <RouteWithLayout
                        component={ShareView}
                        exact
                        layout={MainLayout}
                        path={`/share`}
                    />
                </Switch>
            </React.Fragment>
        </div>
    );
};

export default Routes;