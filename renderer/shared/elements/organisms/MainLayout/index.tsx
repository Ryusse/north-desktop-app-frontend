import { ReactNode } from 'react';

import { StyledMainLayout, StyledContent } from './styles';
import { Sidebar } from '@/elements/organisms';

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <StyledMainLayout>
      <Sidebar />
      <StyledContent>{children}</StyledContent>
    </StyledMainLayout>
  );
};
