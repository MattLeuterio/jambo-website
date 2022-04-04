import React from 'react';
import PropTypes from 'prop-types';

import { LogoContainer, LogoImg } from './style';
import LogoAgency from '../../ui/assets/img/logo-jambo-agency.svg';

const Logo = ({
  type = LogoAgency, size, onClick
}) => (
  <LogoContainer className="logo-website" size={size} onClick={onClick}>
    <LogoImg
      src={type}
    />
  </LogoContainer>
);

Logo.TYPE = {
  AGENCY: 'agency',
  ANIMATION: ''
};

Logo.SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

Logo.propTypes = {
  size: PropTypes.oneOf(Object.values(Logo.SIZE)),
  onClick: PropTypes.func
};

Logo.defaultProps = {
  size: Logo.SIZE.MEDIUM
};

export default Logo;
