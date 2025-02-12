// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Research A New Design',
  tagline: 'Join me as I travel the path of research and design.',
  favicon: 'img/favicon.ico',
  url: 'https://www.adamjolicoeur.com',
  baseUrl: '/researchandesign/',
  organizationName: 'AdamJ',
  projectName: 'researchandesign',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: "link",
      attributes: {
        href: "/fonts/Hubot-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "/fonts/Mona-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "/fonts/MonaspaceArgon-Medium.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "/fonts/fa-brands-400.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "/fonts/fa-regular-400.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "/fonts/fa-solid-900.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
          // sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        docs: false,
        blog: {
          // routeBasePath: `/`,
          blogSidebarTitle: "Musings",
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          postsPerPage: 5,
          truncateMarker: /<!--\s*(truncate)\s*-->/,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    // @type {import('@docusaurus/preset-classic').ThemeConfig}
    ({
      image: 'img/docusaurus-social-card.png',
      navbar: {
        title: 'Research A New Design',
        logo: {
          alt: 'site logo',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://www.adamjolicoeur.com',
            label: 'Portfolio',
            position: 'right'
          },
          {
            href: 'https://github.com/AdamJ/researchandesign',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // docs: {
      //   sidebar: {
      //     hideable: false,
      //   }
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      footer: {
        // style: 'light',
        links: [
          // {
          //   title: 'Site',
          //   items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //   ],
          // },
          {
            title: 'External',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AdamJ/researchandesign',
              },
              {
                label: 'Dev',
                href: 'https://dev.to',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ajjolicoeur/',
              },
              {
                label: 'Threads',
                href: 'https://threads.net/mindreeper',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'unDraw',
                href: 'https://undraw.co/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Made with &#10084;&#65039; by <a href="https://www.adamjolicoeur.com/about/" alt="Link to Adam Jolicoeur's about page">Adam Jolicoeur</a>`,
      },
      prism: {
        theme: prismThemes.gruvboxMaterialLight,
        darkTheme: prismThemes.nightOwl,
      },
    }),
};

export default config;
