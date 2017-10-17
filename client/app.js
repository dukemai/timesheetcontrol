import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { Page } from './components';
import * as reducers from './reducers';
import { loadArticles } from './actions';

import './style.scss';

const propTypes = {
};
const defaultProps = {
};

const rootReducer = combineReducers({
  ...reducers,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

const App = ({ }) => (
    <Provider store={store}>
        <div className="section">
            <div className="container">
                <h1 className="title">
                    1 minuts läsning
                </h1>
                <Page />
            </div>
        </div>    
    </Provider>
);

const loadSkeleton = (s) => {
    s.dispatch(loadArticles());
}

loadSkeleton(store);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

ReactDOM.render(<App />, document.getElementById('app'));
