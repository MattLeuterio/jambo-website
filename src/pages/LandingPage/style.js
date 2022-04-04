import styled from 'styled-components';
import theme from '../../ui/theme';

export const LandingContainer = styled.div`
  height: inherit;
  
  @media ${props => props.theme.device.tablet} {
    height: 100%;
  }
`;
