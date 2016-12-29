import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './main.css';
import './favicon.ico';

import {getRandomArtists} from './helpers/artistsHelper';
import App from './components/App/App';

const store = configureStore();

const artists = getRandomArtists();

render(
  <Provider store={store}>
    <App artists={artists}/>
  </Provider>, document.getElementById('app')
);
