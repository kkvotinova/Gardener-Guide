import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

import { StyledSideBar, StyleTypography } from '@/components/SideBar/SideBarStyled';

import { Months } from '@/resources/constants/calendar';

const SideBar = () => {
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

  return <StyledSideBar>{config}</StyledSideBar>;
};

export default SideBar;
