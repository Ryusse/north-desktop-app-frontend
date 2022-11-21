import React from 'react';

import { ic_logo } from './icons/ic_logo';

export const iconTypes = {
  ic_logo: {
    component: ic_logo,
    alt: 'Logo',
  },
};

export type IconNames = keyof typeof iconTypes;

type Props = {
  name: IconNames;
  className?: string;
};

const IconComponent: React.FC<Props> = ({ name, ...props }) => {
  const Icon = iconTypes[name] ? iconTypes[name] : iconTypes.ic_logo;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon.component {...props} alt={Icon?.alt} />;
};

export default IconComponent;
