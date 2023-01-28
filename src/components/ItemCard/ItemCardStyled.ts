import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

export const StyledItemWrapper = styled(Link)`
  padding: 20px 28px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 12px;
  box-shadow: 0px 8px 24px rgba(129, 135, 189, 0.15);
  background: ${({ theme }) => theme.palette.common.white};

  transition: all 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
    transform: scale(0.9);
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const StyledImage = styled('img')`
  margin-bottom: 16px;
  max-width: 100px;
  max-height: 100px;
`;
