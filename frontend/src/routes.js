import React, { Suspense, lazy } from 'react';
import {
    Route, BrowserRouter as Router, Switch
} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

const Home = lazy(() => import('./Pages/Home'));

const Routes = () => (
    <Router>
        <Suspense fallback={(
            <div className="d-flex justify-content-center">
                <div className="centered">
                    <CircularProgress color="secondary" size={50} />
                </div>
            </div>
        )}
        >
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;
