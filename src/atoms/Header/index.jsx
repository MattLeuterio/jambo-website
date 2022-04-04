import React, { useState } from 'react';
import { connect } from 'react-redux';
import compose from '../../redux/compose';
import { withMediaQueries } from '../../hoc/withMediaQueries';
import { HeaderContainer, LeftContainer, RightContainer } from './style';
import {
  FiltersButton, HamburgerMenu, MenuMobile, Search
} from '../index';
import Logo from '../Logo';

const Header = ({ mediaIsPhone, isVisible }) => {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  return (
    <>
      <HeaderContainer isVisible={isVisible}>
        {mediaIsPhone && (
          <Search isHeader />
        )}
        <LeftContainer>
          <Logo size="small" />
        </LeftContainer>
        <RightContainer>
          {!mediaIsPhone && (
            <FiltersButton />
          )}
          {!mediaIsPhone && (
            <Search isHeader />
          )}
          {mediaIsPhone && (
            <HamburgerMenu open={menuMobileIsOpen} onClick={() => setMenuMobileIsOpen(!menuMobileIsOpen)} />
          )}
        </RightContainer>
      </HeaderContainer>
      <MenuMobile open={menuMobileIsOpen} />
    </>
  );
};

Header.propTypes = {};

const composed = compose(
  connect(
    state => {},
    dispatch => ({
    })
  ),
  withMediaQueries
)(Header);
export default composed;
