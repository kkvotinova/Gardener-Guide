import { Outlet } from 'react-router-dom';

import NavBar from '@/components/NavBar/NavBar';
import Header from '@/components/Header';
import { StyledContentWrapper } from '@/components/ContentWrapper/ContentWrapperStyled';

const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <Header />
      <NavBar />

      <Outlet />
    </StyledContentWrapper>
  );
};

export default ContentWrapper;
