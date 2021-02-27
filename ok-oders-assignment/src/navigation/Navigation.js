import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home';

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact={true} path="/details" component={Details} />
            </Switch>
        </Router>
    )
}

export default Navigation;
