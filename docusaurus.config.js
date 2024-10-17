// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Research a new design',
  tagline: 'Research a new design today',
  favicon: 'img/favicon.ico',
  url: 'https://www.researchandesign.com',
  baseUrl: '/researchandesign',
  organizationName: 'AdamJ',
  projectName: 'researchandesign',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Hubot-Sans.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preload",
        href: "static/fonts/Mono-Sans.woff2",
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
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogSidebarTitle: "Thoughts and Notes",
          showReadingTime: true,
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
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.png',
      navbar: {
        title: 'Research a new design',
        logo: {
          alt: 'research a new design logo',
          src: 'img/logo.svg',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Start Here',
          },
          {
            to: '/blog',
            label: 'Thoughts',
            position: 'left'
          },
          {
            href: 'https://github.com/AdamJ/researchandesign',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'External',
            items: [
              {
                label: 'Dev',
                href: 'https://dev.to',
              },
              {
                label: 'Threads',
                href: 'https://threads.net/mindreeper',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AdamJ/researchandesign',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | Made with &#10084;&#65039; by <a href="https://www.adamjolicoeur.com/about/" alt="Link to Adam Jolicoeur's about page">Adam Jolicoeur</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
