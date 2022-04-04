import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  FooterHome,
  HomeContainer, LogoSector, Sector,
  SectorsContainer
} from './style';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import {
  SET_FILTER_BY_TITLE, SET_FILTERS_CLOSE, SET_GENRE, SET_ORDER
} from '../../redux/actions/filters';
import Lexend from '../../ui/typography/lexend';
import { Logo } from '../../atoms';

// Image & Logo
import LogoAgency from '../../ui/assets/img/logo-jambo-agency.svg';
import LogoAnimation from '../../ui/assets/img/logo-jambo-wedding.svg';
import LogoWedding from '../../ui/assets/img/logo-jambo-animation.svg';
import RingW from '../../ui/assets/img/ring-w.png';
import RingM from '../../ui/assets/img/ring-m.png';
import Smile from '../../ui/assets/img/smile.png';
import ImgWedding from '../../ui/assets/img/home-img-wedding.png';
import ImgAnimation from '../../ui/assets/img/home-img-animation.png';

const Home = ({
  labels
}) => {
  const [sector, setSector] = useState(LogoAgency);

  return (
    <HomeContainer>
      <Logo size="large" />
      <Lexend type="bold">{labels?.payoff}</Lexend>
      <SectorsContainer>
        <Sector>
          <LogoSector
            active={sector}
            sector="wedding"
            src={RingW}
          />
        </Sector>
        <Sector>
          <LogoSector
            active={sector}
            sector="animation"
            src={Smile}
          />
        </Sector>
      </SectorsContainer>
      <FooterHome>

      </FooterHome>
    </HomeContainer>
  );
};


Home.propTypes = {
};

export default connect(
  state => ({
    labels: state.app?.vocabulary?.labels
  }),
  dispatch => ({
  })
)(withMediaQueries(Home));
