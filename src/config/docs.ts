interface NavItem {
  title: string;
  href: string;
}
import { Icons } from '@/components/icons';

export interface NavItemUpdated {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItemUpdated {
  items: NavItemWithChildren[];
}
interface DocsConfig {
  mainNav?: {
    title: string;
    href: string;
  }[];
  sidebarNav?: NavItemWithChildren[];
  footerNav: {
    top: NavItem[];
    bottom: NavItem[];
  };
  categories: {
    image: string;
    title: string;
  }[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Components',
      href: '/docs/components/accordion',
    },
    {
      title: 'Themes',
      href: '/themes',
    },
    {
      title: 'Examples',
      href: '/examples',
    },
    {
      title: 'Blocks',
      href: '/blocks',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        },
        {
          title: 'components.json',
          href: '/docs/components-json',
          items: [],
        },
        {
          title: 'Theming',
          href: '/docs/theming',
          items: [],
        },
        {
          title: 'Dark mode',
          href: '/docs/dark-mode',
          items: [],
        },
        {
          title: 'CLI',
          href: '/docs/cli',
          items: [],
        },
        {
          title: 'Typography',
          href: '/docs/components/typography',
          items: [],
        },
        {
          title: 'Figma',
          href: '/docs/figma',
          items: [],
        },
        {
          title: 'Changelog',
          href: '/docs/changelog',
          items: [],
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
          items: [],
        },
      ],
    },
  ],
  footerNav: {
    top: [
      {
        title: 'About',
        href: '#',
      },
      {
        title: 'Shop',
        href: '#',
      },
      {
        title: 'Contact',
        href: '#',
      },
    ],
    bottom: [
      {
        title: 'Privacy Policy',
        href: '#',
      },
      {
        title: 'Terms of Service',
        href: '#',
      },
      {
        title: 'Cookie Settings',
        href: '#',
      },
    ],
  },
  categories: [
    {
      image: '/beer_large.png',
      title: 'Beer & Cider',
    },
    {
      image: '/champagne_large.png',
      title: 'Champagne',
    },
    {
      image: '/wine_large.png',
      title: 'Wine',
    },
    {
      image: '/spirits_large.png',
      title: 'Spirits',
    },
    {
      image: '/non_alcohol_large.png',
      title: 'Soft Drinks',
    },
  ],
};
