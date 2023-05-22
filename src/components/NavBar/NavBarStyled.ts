import { List, Paper, styled, Typography } from '@mui/material';

export const StyedNavBar = styled('div')`
  margin-bottom: 40px;
  padding: 8px 0;

  width: 100%;

  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};
  background-color: ${({ theme }) => theme.palette.primary.main};

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledList = styled(List)`
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiListItem-root {
    width: auto;

    transition: transform 0.3s linear;

    :hover {
      transform: scale(0.94);
    }
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};

  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;

export const StyledPaper = styled(Paper)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 10;
  border-radius: 0;
  box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);

  @media (min-width: 600px) {
    display: none;
  }
`;
