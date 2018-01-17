import React, { Component } from 'react';
import { Router, Route, Redirect, Switch} from 'react-router-dom';
import { createHashHistory } from 'history'
import LandingPage from './container/landingPage/landingPageContainer.jsx';
import TokenPage from './container/token/tokenContainer.jsx';


const history = createHashHistory();
class Routes extends Component {
render() {
return (
<Router history={history}>
<Switch>
<Route path="/landing" component={LandingPage} />
<Route path="/token" component={TokenPage} />

<Redirect from="/" to="/landing"/>
</Switch>
</Router>
);
}
}
export default Routes;
