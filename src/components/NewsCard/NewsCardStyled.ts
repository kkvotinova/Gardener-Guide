import { Link } from 'react-router-dom';
import { Typography, styled } from '@mui/material';

export const StyledCardWrapper = styled(Link)`
  width: 300px;
  height: 320px;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 12px;

  overflow: hidden;
  transition: all 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
    transform: scale(0.99);
  }
`;

export const StyledCardInfo = styled('div')`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledInfoWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    margin-left: 16px;
    & > p {
      margin-left: 4px;
    }
  }
`;
