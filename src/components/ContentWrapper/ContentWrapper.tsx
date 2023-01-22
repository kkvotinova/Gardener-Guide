import { Outlet } from 'react-router-dom';

import NavBar from '@/components/NavBar/NavBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StyledContentWrapper } from '@/components/ContentWrapper/ContentWrapperStyled';

const ContentWrapper = () => {
  return (
    <StyledContentWrapper>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </StyledContentWrapper>
  );
};

export default ContentWrapper;
