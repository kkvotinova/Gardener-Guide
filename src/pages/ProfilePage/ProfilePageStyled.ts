import { NavLink } from 'react-router-dom';
import { Drawer, IconButton, styled } from '@mui/material';

export const StyledSideBar = styled('div')`
  padding: 10px 0;
  height: max-content;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 60px 10px 40px;
  width: 100%;

  transition: all 0.3s linear;
  border-radius: ${({ theme }) => theme.shape.borderRadius};

  &.active {
    color: ${({ theme }) => theme.palette.primary.dark};
    &:hover {
      transform: none;
      background-color: inherit;
    }
  }

  &:hover {
    transform: scale(0.9);
    background-color: rgba(33, 203, 119, 0.2);
  }
`;

export const StyledWrapper = styled('div')`
  width: calc(100% - 253px);

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledContentWrapper = styled('div')`
  gap: 32px;
  display: flex;
  flex-direction: row;
`;

export const StyledIconButton = styled(IconButton)`
  @media (min-width: 900px) {
    display: none;
  }
`;

export const StyledDrawer = styled(Drawer)`
  & > .MuiDrawer-paperAnchorLeft {
    padding: 16px 0;
  }
`;
