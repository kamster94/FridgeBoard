import type { Link } from './_types';
import { IconEnum } from './_enums';

export const pages: Link[] = [
  {
    label: 'Home',
    href: '/',
    icon: IconEnum.Home
  },
  {
    label: 'Bills',
    href: '/bills',
    icon: IconEnum.Money
  },
  {
    label: 'About',
    href: '/about',
    icon: IconEnum.Help
  }
];
