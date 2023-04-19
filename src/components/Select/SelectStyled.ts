import { Select, MenuItem } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import styled from '@emotion/styled';

export const StyledSelect = styled(Select)`
  cursor: pointer;
  height: 100%;
`;

export const StyledOption = styled(MenuItem)``;

export const StyledClearIcon = styled(ClearIcon)`
  position: absolute;
  right: 32px;
  top: calc((100% - 20px) / 2);

  color: #cccdd3;
  cursor: pointer;
`;
