// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nimbus',
  url: 'https://guide.nimbus.team/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Nimbus',
        customSiteConfig: true,
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: false,
                },
              },
            },
          },
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        og: {},
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 100,
        sizes: [400],
        disableInDev: true,
      },
    ],
    [
      '@acid-info/docusaurus-remote-content',
      /** @type {import('@acid-info/docusaurus-remote-content').PluginOptions} */
      ({
        remote: {
          type: 'zip',
          url:
            'https://github.com/acid-info/guide.logos.co/archive/refs/heads/develop.zip',
          dir: 'guide.logos.co-develop',
        },
        outDir: 'docs',
        sourceDir: 'docs',
        keepLocal: ['./visual-language/logo.mdx'],
        keepStatic: ['nimbus/**/*'],
      }),
    ],
  ],

  themes: [
    [
      '@acid-info/logos-docusaurus-brand-guidelines-theme',
      /** @type {import('@acid-info/logos-docusaurus-brand-guidelines-theme').ThemeOptions} */
      ({
        customCss: [],
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: 'search',
          },
        ],
      },
      footer: {
        copyright: 'Nimbus @2023<br/>All Rights Reserved.',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/ethnimbus',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/EP8DZnXu9y',
                label: 'Discord',
              },
              {
                to: '/docs',
                label: 'Docs',
              },
              {
                href: 'https://github.com/status-im',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                href: 'https://jobs.status.im/',
                label: 'Work with us',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
