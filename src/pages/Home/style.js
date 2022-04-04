import styled from 'styled-components';
import theme from '../../ui/theme';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px);
  color: ${theme.colors.primary.white};
  
  & .logo-website {
    margin-bottom: 16px;
  }
  
  @media ${props => props.theme.device.tablet} {
    height: 100%;
  }
`;

export const SectorsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

export const Sector = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const LogoSector = styled.img`
  width: 150px;
`;

export const FooterHome = styled.div`
  display: flex;
  height: 43px;
`;
