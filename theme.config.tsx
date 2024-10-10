import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src="/images/TestSprite_Logo2.svg" 
        alt="TestSprite Logo" 
        width={24} 
        height={24} 
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        TestSprite v1.1.2
      </span>
    </div>
  ),
  chat: {
    link: 'https://discord.com/invite/GXWFjCe4an',
  },
  docsRepositoryBase: 'https://github.com/TestSprite/Docs/blob/v1.0',
  nextThemes: {
    defaultTheme: 'dark'
  },
  footer: {
    text: '© 2024 TestSprite, All Rights Reserved.',
  },
  banner: {
    key: 'prod-release',
    text: (
      <a href="https://www.testsprite.com" style={{ color: '#32D581' }}>
        The upcoming release of TestSprite v1.0 is scheduled for Oct. 2024. Read more →
      </a>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'TestSprite - %s'
    }
  },
  primaryHue: 140, // This corresponds to a green hue
  primarySaturation: 70,
  head: (
    <>
      <link rel="icon" href="/images/TestSprite_Logo2.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/images/TestSprite_Logo2.svg" />
    </>
  ),
}

export default config
