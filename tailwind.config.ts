import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        title: '#2E2F35',
        titleDark: '#3B96FF',
        subtitle: '#58595D',
        'section-info': '#141414',
        'header-links': '#222222',
      },
      boxShadow: {
        custom: '3px 3px 0 0 rgba(46,47,53,1)',
        customDark: '3px 3px 0 0 rgba(59,150,255,1)',
      },
      animation: {
        fade: 'fadeOut 0.6s ease-in-out',
        'menu-fade': 'fadeOut 0.1s ease-in-out',
        'close-accordion': 'closeAccordion 0.3s ease-in-out',
        'open-accordion': 'openAccordion 0.3s ease-in-out',
        'fade-slide-down': 'fadeAndSlideDown 0.2s ease-in-out both',
        'scale-up-sm': 'scaleUpSm 0.03s ease-in-out both',
        'scale-down-md': 'scaleDownMd 0.2s ease-in-out both',
        'fade-in-up': 'fade-in-up 0.6s ease-in-out',
        squeeze: 'squeeze 0.6s ease-in-out',
        tada: 'tada 1s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        openAccordion: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(90deg)' },
        },
        closeAccordion: {
          from: { transform: 'rotate(90deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        scaleUpSm: {
          from: { scale: '1' },
          to: { scale: '1.02' },
        },
        scaleDownMd: {
          from: { scale: '0.96', transform: 'translateY(-5%)' },
          to: { scale: '1', transform: 'translateY(0%)' },
        },
        fadeAndSlideDown: {
          from: {
            transform: 'translateY(-0.5%)',
            scale: '0.96',
          },
          to: {
            transform: 'translateY(0%)',
            scale: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        squeeze: {
          '0%, 100%': {
            transform: 'scale(1, 1)',
          },
          '50%': {
            transform: 'scale(1.02, 0.95)',
          },
        },
        tada: {
          '0%': {
            transform: 'scale(1)',
          },
          '10%': {
            transform: 'scale(0.9) rotate(-3deg)',
          },
          '20%': {
            transform: 'scale(0.9) rotate(-3deg)',
          },
          '30%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '40%': {
            transform: 'scale(1.1) rotate(-3deg)',
          },
          '50%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '60%': {
            transform: 'scale(1.1) rotate(-3deg)',
          },
          '70%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '80%': {
            transform: 'scale(1.1) rotate(-3deg)',
          },
          '90%': {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '100%': {
            transform: 'scale(1) rotate(0)',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
}
export default config
