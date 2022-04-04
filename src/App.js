import './ui/scss/app.scss';
import './ui/scss/bootstrap/bootstrap-grid.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datetime/css/react-datetime.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
  Router, Route, Switch, Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import theme from './ui/theme';
import { history } from './redux/store';

import { GlobalLayout, Toast } from './components';
import routes from './routes';

import {
  Home,
  LandingPage
} from './pages';
import { getContent } from './contentful';
import { SET_PRODUCTS } from './redux/actions/product';
import { SET_VOCABULARY } from './redux/actions/app';

const App = ({
  setVocabulary
}) => {
  const [listVocabulary, setListVocabulary] = useState([]);
  useEffect(() => {
    getContent('vocabulary', setListVocabulary);
  }, []);

  useEffect(() => {
    console.log('listVocabulary', listVocabulary);
    setVocabulary(listVocabulary);
  }, [listVocabulary, setVocabulary]);
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalLayout>
          <Switch>
            <>
              {/* <Route
                    path={`${routes.videoSettings.path}/:platform/:videoId`}
                    exact
                    render={({
                      match: {
                        params: { videoId, platform }
                      }
                    }) => <VideoSettings videoId={videoId} platform={platform} />}
                  /> */}
              <Route
                path={routes.home.path}
                render={() => <Home />}
              />
              <Route
                path={routes.wedding.path}
                render={() => <LandingPage sector="wedding" />}
              />
              <Route
                path={routes.animation.path}
                render={() => <LandingPage sector="animation" />}
              />
              <Redirect to={routes.home.path} />
            </>
          </Switch>
        </GlobalLayout>
      </Router>
      <Toast />
    </ThemeProvider>
  );
};

App.propTypes = {
  // HOC (connect, state)
};

export default connect(
  state => ({

  }),
  dispatch => ({
    setVocabulary: (vocabulary) => dispatch({ type: SET_VOCABULARY, vocabulary })
  })
)(App);
