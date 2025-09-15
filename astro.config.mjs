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
      ],
      sidebar: [
        {
          label: 'OUR NETWORK STATE',
          items: [
            { label: 'How to Join / Becoming a Citizen', slug: 'network_state/how_to_join' },
            { label: 'Commmunity Roles', slug: 'network_state/community_roles' },
            { label: 'Contributions', slug: 'network_state/contributions' },
            { label: 'Token ($ISLAND)', slug: 'network_state/token' },
            { label: 'On-Chain Governance', slug: 'network_state/governance' },
          ],
        },
        {
          label: 'WHAT WE PROVIDE',
          items: [
            {
              label: 'Feedback Sessions',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'we_provide/feedback/feedback_overview' },
                { label: 'Feedback Reviews', slug: 'we_provide/feedback/feedback_review' },
                { label: 'Feedback Live Bonanza', slug: 'we_provide/feedback/feedback_bonanza' },
              ],
            },
            {
              label: 'Grants Program',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'we_provide/grants/grants_overview' },
                { label: 'Decentragrant', slug: 'we_provide/grants/decentragrant' },
                { label: 'Metaplex Grant', slug: 'we_provide/grants/metaplex_grant' },
              ],
            },
            { label: 'Hackathon Judging', slug: 'we_provide/hackathon' },
            {
              label: 'Events',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'we_provide/events/events_overview' },
                { label: 'AthensDAO event', slug: 'we_provide/events/athensdao' },
                { label: 'IslandDAO event', slug: 'we_provide/events/islanddao' },
              ],
            },
          ],
        },
        {
          label: 'OUR ON-CHAIN TOOLS',
          items: [
            { label: 'Realms', slug: 'tools/realms' },
            { label: 'PubKey', slug: 'tools/pubkey' },
            { label: 'Metaplex', slug: 'tools/metaplex' },
          ],
        },
        {
          label: 'OUR NFT MARKETPLACE',
          items: [
            { label: 'Magic Eden', slug: 'nft/magic_eden' },
            { label: 'Tensor', slug: 'nft/tensor' },
          ],
        },
        {
          label: 'OUR PARTNERS',
          items: [{ label: 'Partners', slug: 'partners/partners' }],
        },
        {
          label: 'OUR SOCIALS',
          items: [{ label: 'Official Links', slug: 'socials/socials' }],
        },
      ],
      customCss: ['./src/styles/global.css'],
      components: {
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
