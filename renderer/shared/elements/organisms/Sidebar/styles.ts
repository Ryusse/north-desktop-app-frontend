import { Box, Typography, styled, alpha } from '@mui/material';
import Link from 'next/link';

interface LinkProps {
  href: string;
  currentPath: any;
}

export const StyledSidebar = styled(Box)(({ theme }) => ({
  top: 0,
  position: 'sticky',
  minWidth: '16rem',
  width: 'fit',
  height: '100vh',
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.6),
  backdropFilter: 'blur(10px)',
}));

export const StyledHeader = styled(Box)({
  padding: '1.75rem',
});

export const StyledContent = styled(Box)({});

export const StyledFooter = styled(Box)({
  padding: '1.75rem',
});

export const StyledTitle = styled(Typography)({
  fontWeight: '600',
  padding: '1.75rem',
});

export const StyledList = styled(Box)({
  listStyle: ' none',
  margin: '0',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
});

export const StyledItem = styled(Box)(({ theme }) => ({}));

export const StyledLink = styled(Link)<LinkProps>(
  ({ theme, href, currentPath }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    padding: '7px 1.75rem',
    position: 'relative',
    color: href === currentPath ? theme.palette.primary.main : 'currentcolor',

    '::before': {
      content: '""',
      opacity: href === currentPath ? 1 : 0,
      position: 'absolute',
      top: '0',
      right: '0',
      height: '100%',
      width: '2px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '5px 0 0 5px ',
    },
  })
);

export const StyledLinkText = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
}));
