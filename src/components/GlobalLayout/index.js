import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer, PageContent } from './styles';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { heightHeaderShow } from '../../const';
import { Header } from '../../atoms';

const GlobalLayout = ({
  children, mediaIsPhone, location
}) => {
  const [vh, setVh] = useState(`${window.innerHeight * 0.01}px`);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sector, setSector] = useState('');

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.pageYOffset);
    };
  });

  useEffect(() => {
    localStorage.setItem('sector', sector);
  }, [sector]);

  window.addEventListener('resize', () => {
    const newVh = `${window.innerHeight * 0.01}px`;
    setVh(newVh);
  });

  return (
    <>
      {location !== '/home' && (
        <Header hasBackground={scrollPosition >= heightHeaderShow} />
      )}
      <PageContainer
        vh={vh}
      >
        <PageContent
          isHome={location === '/home'}
          jumbotronIsActive={!mediaIsPhone && scrollPosition < 258}
          className="page-content"
          sector={sector}
        >
          {children}
        </PageContent>
      </PageContainer>
    </>
  );
};

GlobalLayout.propTypes = {
  children: PropTypes.node
};

export default connect(
  state => ({
    location: state.router.location.pathname
  }),
  dispatch => ({
  })
)(withMediaQueries(GlobalLayout));
