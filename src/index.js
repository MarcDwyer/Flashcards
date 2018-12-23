import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flashcard from './components/flashcard'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
    <Switch>
    <Route path="/:id" component={Flashcard} />
    <Route path="/" component={Flashcard} />
    </Switch>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
