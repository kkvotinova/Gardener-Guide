import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import { StyledContentWrapper } from '@/components/ContentWrapper/ContentWrapperStyled';

const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <Header />

      <Outlet />
    </StyledContentWrapper>
  );
};

export default ContentWrapper;
