import { useState, useEffect } from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import { SvgIcon } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  StyledSidebar,
  StyledHeader,
  StyledContent,
  StyledFooter,
  StyledTitle,
  StyledList,
  StyledItem,
  StyledLink,
  StyledLinkText,
} from './styles';
import { Logo } from '@/elements/atoms';

const links = [
  {
    id: 1,
    label: 'Dashboard',
    icon: DashboardIcon,
    route: '/home',
  },
  {
    id: 2,
    label: 'Perfil',
    icon: PersonIcon,
    route: 'a',
  },
];

export const Sidebar = () => {
  const [menu, setMenu] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (links.length > 0) {
      setMenu(links);
    }
  }, []);

  console.log(router.asPath);
  return (
    <StyledSidebar>
      <StyledHeader>
        <Logo />
      </StyledHeader>
      <StyledContent>
        <StyledTitle variant="subtitle2">Menú principal</StyledTitle>
        <StyledList component="ul">
          {menu &&
            menu.map((_, i) => (
              <StyledItem component="li" key={i}>
                <StyledLink href={_.route} currentPath={router.asPath}>
                  <SvgIcon component={_.icon} fontSize="small" />
                  <StyledLinkText variant="body1">{_.label}</StyledLinkText>
                </StyledLink>
              </StyledItem>
            ))}
        </StyledList>
      </StyledContent>
      <StyledFooter></StyledFooter>
    </StyledSidebar>
  );
};
