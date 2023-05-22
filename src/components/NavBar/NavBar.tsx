import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationTypeMap,
  ListItem,
} from '@mui/material';

import {
  StyedNavBar,
  StyledList,
  StyledPaper,
  StyledTypography,
} from '@/components/NavBar/NavBarStyled';

import useSidebarRouting from '@/hooks/useSidebarRouting';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const config = useSidebarRouting();

  const getLinkProps = useCallback((href?: string) => {
    if (!href) return {};
    return { component: Link, to: href };
  }, []);

  const items = useMemo(() => {
    return config.map((a) => {
      const linkProps = getLinkProps(a.href);

      return (
        <ListItem {...linkProps} key={a.name}>
          <StyledTypography>{a.name}</StyledTypography>
        </ListItem>
      );
    });
  }, [config, getLinkProps]);

  const actions = useMemo(() => {
    return config.map((a) => <BottomNavigationAction key={a.name} icon={a.icon} />);
  }, [config]);

  const navigationState = useMemo(() => {
    if (location.pathname === '/') return 5;

    for (let index = 0; index < config.length; index++) {
      if (location.pathname.includes(config[index].href)) {
        return index;
      }
    }

    return 5;
  }, [config, location.pathname]);

  const handleChangeNavigateState: BottomNavigationTypeMap['props']['onChange'] = (_, value) => {
    navigate(config[value].href);
  };

  return (
    <>
      <StyedNavBar>
        <StyledList>{items}</StyledList>
      </StyedNavBar>

      <StyledPaper>
        <BottomNavigation value={navigationState} onChange={handleChangeNavigateState}>
          {actions}
        </BottomNavigation>
      </StyledPaper>
    </>
  );
};

export default NavBar;
