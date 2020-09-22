import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard'
import Info from '../pages/info'

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component= {Dashboard}/>
        <Route path='/info' component={Info}/>
    </Switch>
);

export default Routes;