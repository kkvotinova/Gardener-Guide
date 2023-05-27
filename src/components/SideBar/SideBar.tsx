import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

import { StyledDrawer, StyledSideBar, StyleTypography } from '@/components/SideBar/SideBarStyled';

import { Months } from '@/resources/constants/calendar';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const config = useMemo(() => {
    return Months.map((month) => {
      const isActiveMonth = month.value === searchParams.get('month');

      return (
        <StyleTypography
          key={month.value}
          variant='subtitle1'
          $isActive={isActiveMonth}
          onClick={() => setSearchParams({ month: month.value }, { replace: true })}
        >
          {month.label}
        </StyleTypography>
      );
    });
  }, [searchParams, setSearchParams]);

  return (
    <>
      <StyledSideBar>{config}</StyledSideBar>
      <StyledDrawer anchor='left' open={isOpen} onClose={onClose}>
        {config}
      </StyledDrawer>
    </>
  );
};

export default SideBar;
