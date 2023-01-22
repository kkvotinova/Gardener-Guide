import { Link } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { ListItem } from '@mui/material';

import { StyedNavBar, StyledList, StyledTypography } from '@/components/NavBar/NavBarStyled';

import useSidebarRouting from '@/hooks/useSidebarRouting';

const NavBar = () => {
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

  return (
    <StyedNavBar>
      <StyledList>{items}</StyledList>
    </StyedNavBar>
  );
};

export default NavBar;
