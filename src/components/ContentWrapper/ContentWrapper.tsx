import { Navigate, Outlet, useLocation } from 'react-router-dom';

import NavBar from '@/components/NavBar/NavBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  StyledContentWrapper,
  StyledOutletWrapper,
} from '@/components/ContentWrapper/ContentWrapperStyled';

import routes from '@/resources/routes';

const ContentWrapper = () => {
  const location = useLocation();

  const isAuthorized = false;
  const isProfilePage = location.pathname === routes.profile.path;

  if (!isAuthorized && isProfilePage) {
    return <Navigate replace to={routes.index.path} />;
  }

  return (
    <StyledContentWrapper>
      <Header />
      <NavBar />

      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>

      <Footer />
    </StyledContentWrapper>
  );
};

export default ContentWrapper;
