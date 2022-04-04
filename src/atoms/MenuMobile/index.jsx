import React from 'react';
import { connect } from 'react-redux';
import compose from '../../redux/compose';

import {
  Container
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';

const MenuMobile = ({
  open
}) => (
  <Container isOpen={open}>
  </Container>
);

const composed = compose(
  connect(
    state => {},
    dispatch => ({
    })
  ),
  withMediaQueries
)(MenuMobile);
export default composed;
