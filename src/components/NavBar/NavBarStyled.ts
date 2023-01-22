import { List, styled, Typography } from '@mui/material';

export const StyedNavBar = styled('div')`
  margin-bottom: 40px;
  padding: 8px 0;

  width: 100%;

  border-radius: ${({ theme }) => theme.shape.borderRadiusSecond};
  background-color: ${({ theme }) => theme.palette.primary.main};
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
