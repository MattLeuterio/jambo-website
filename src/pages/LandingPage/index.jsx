import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  LandingContainer
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import {
  SET_FILTER_BY_TITLE, SET_FILTERS_CLOSE, SET_GENRE, SET_ORDER
} from '../../redux/actions/filters';


const LandingPage = ({
  sector
}) => {

  return (
    <LandingContainer>
      {sector}
    </LandingContainer>
  );
};


LandingPage.propTypes = {
};

export default connect(
  state => {
    const {
      filterByTitle, genreSelected, orderSelected,
      productType: productTypeSelected, filtersOpen
    } = state.filters;
    const { productsList } = state.product;
    return {
      filterByTitle, genreSelected, orderSelected,
      productsList, productTypeSelected, filtersOpen
    };
  },
  dispatch => ({
    setFilterByTitle: (searchValue) => dispatch({ type: SET_FILTER_BY_TITLE, searchValue }),
    setGenre: (genre) => dispatch({ type: SET_GENRE, genre }),
    setOrder: (order) => dispatch({ type: SET_ORDER, order }),
    setFiltersPanelClose: () => dispatch({ type: SET_FILTERS_CLOSE })
  })
)(withMediaQueries(LandingPage));
