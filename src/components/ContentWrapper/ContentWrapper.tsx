import { Navigate, Outlet, useLocation } from 'react-router-dom';

import NavBar from '@/components/NavBar/NavBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  StyledContentWrapper,
  StyledContent,
} from '@/components/ContentWrapper/ContentWrapperStyled';
import AppModalsList from '@/components/AppModalsList';

import routes from '@/resources/routes';

import useAuthorization from '@/hooks/useAuthorization';

const ContentWrapper = () => {
  const location = useLocation();

  const { isAuthorized } = useAuthorization();
  const isProfilePage = location.pathname.includes(routes.profile.path);

  if (!isAuthorized && isProfilePage) {
    return <Navigate replace to={routes.index.path} />;
  }

  return (
    <>
      <StyledContentWrapper>
        <StyledContent>
          <Header />
          <NavBar />
          <Outlet />
        </StyledContent>

        <Footer />
      </StyledContentWrapper>

      <AppModalsList />
    </>
  );
};

export default ContentWrapper;
