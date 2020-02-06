import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

import ParamShower from './ParamShower';

function ParamRoutingApp() {

    return (

        <Router>
            <ul>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
                <li><Link to="/three">Three</Link></li>
                <li><Link to="/four">Four</Link></li>
                <li><Link to="/five">Five</Link></li>
                <li><Link to="/six">Six</Link></li>
                <li><Link to="/seven">Seven</Link></li>
                <li><Link to="/eight">Eight</Link></li>
                <li><Link to="/nine">Nine</Link></li>

            </ul>

            <Route path="/:value">
                <ParamShower />
            </Route>
        </Router>
    )
}

export default ParamRoutingApp;