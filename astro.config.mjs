// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

import cloudflare from '@astrojs/cloudflare'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'IslandDAO',
      logo: {
        light: './src/assets/logo-dark.png',
        dark: './src/assets/logo-light.png',
        alt: 'IslandDAO',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/IslandDAO' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/dvHrj9SXQS' },
        { icon: 'x.com', label: 'Twitter', href: 'https://x.com/islanddao' },
        { icon: 'youtube', label: 'Youtube', href: 'https://www.youtube.com/@IslandDAO' },
      ],
      sidebar: [
        {
          label: 'WELCOME',
          items: [{ label: 'About Us', slug: 'index' }],
        },
        {
          label: 'OUR NETWORK STATE',
          items: [
            { label: 'Why Join', slug: 'network_state/why_join' },
            { label: 'How to Join', slug: 'network_state/how_to_join' },
          ],
        },
        {
          label: 'ON-CHAIN GOVERNANCE',
          items: [
            { label: 'Token ($ISLAND)', slug: 'on_chain_governance/token' },
            { label: 'DAO Governance', slug: 'on_chain_governance/governance' },
          ],
        },
        {
          label: 'THE ISLAND DAO EVENTS',
          // collapsed: false,
          items: [
            { label: 'Overview', slug: 'we_provide/events/events_overview' },
            { label: 'IslandDAO event', slug: 'we_provide/events/islanddao' },
          ],
        },
        {
          label: 'GRANTS PROGRAM',
          items: [
            { label: 'Overview', slug: 'we_provide/grants/grants_overview' },
            { label: 'Decentragrant', slug: 'we_provide/grants/decentragrant' },
            { label: 'Metaplex Grant', slug: 'we_provide/grants/metaplex_grant' },
          ],
        },
      ],
      customCss: ['./src/styles/global.css'],
      components: {
        SocialIcons: './src/components/overrides/SocialIcons.astro',
        PageTitle: './src/components/overrides/PageTitle.astro',
        Footer: './src/components/overrides/Footer.astro',
      },
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
})
