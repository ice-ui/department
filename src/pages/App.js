import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/employees"/>
                </Route>
                <Route exact path="/employees" component={Home} />
                <Route path="/addEmployee" component={AddEmployee}/>
                <Route path="/editEmployee" component={EditEmployee}/>
                <Route path="*">
                    <div>NOT FOUND</div>
                </Route>
            </Switch>
        </Router>
    </Provider>
);

export default App;
