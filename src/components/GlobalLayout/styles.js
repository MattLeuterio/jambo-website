import styled, { css } from 'styled-components';
import {
  NavBarHeight, NavBarHeightMobile
} from '../../const';
import theme from '../../ui/theme';

export const PageContainer = styled.div`
  position: relative;
  // height: ${({ vh }) => `calc(${vh} * 100)`};

  @media ${props => props.theme.device.tabletL} {
    margin-left: 0;
    width: 100vw;
  }
`;

export const PageContent = styled.div`
  min-height: ${props => (props.isHome ? '100vh' : `calc(100vh - ${NavBarHeight}px)`)};
  padding-top: ${props => (props.isHome ? '80px' : `calc(${NavBarHeightMobile}px)`)};
  overflow: auto;
  position: relative;
  flex-grow: 1;
  width: 100%;
  background-color: ${props => (
    props.sector === 'wedding'
      ? `${theme.colors.primary.gold}`
      : props.sector === 'animation'
        ? `${theme.colors.primary.blue}`
        : `${theme.colors.primary.green}`
  )};
  transition: all 250ms ease-in-out;

  @media ${props => props.theme.device.tabletL} {
    min-height: ${props => (props.isHome ? '100vh' : `calc(100vh - ${NavBarHeight}px)`)};
    padding-top: ${props => (props.isHome ? '40px' : `calc(${NavBarHeight}px)`)};
  }
`;
