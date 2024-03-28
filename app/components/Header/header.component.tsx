'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  XMarkIcon,
  // SunIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { links } from '@/app/utils'
import { EllipsisVerticalIcon, SunIcon } from '@heroicons/react/20/solid'
import { cairo } from '@/app/fonts'

type THeaderLinkProps = {
  href: string
  target?: string
  icon: string
  alt: string
  className?: string
}

const HeaderLink = ({
  href,
  target = '_blank',
  icon,
  alt,
  className = '',
}: THeaderLinkProps) => (
  <Link href={href} target={target} className={className}>
    <Image src={icon} width={25} height={25} alt={alt} />
  </Link>
)

const navigation = [
  // { name: 'Docs', href: links.docs, external: false },
  { name: 'Whitepaper', href: links.whitepaper, external: true },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const handleColorTheme = () => {
    const root = document.getElementsByTagName('html')[0]
    root.classList.toggle('dark')
  }

  const commonButtonClass =
    'flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 text-title p-1.5 hover:bg-gray-100/[0.15] dark:bg-titleDark'

  return (
    <>
      <div
        className={`absolute z-50 h-full w-full backdrop-blur-sm ${mobileMenuOpen ? 'visible' : 'hidden'} animate-menu-fade lg:hidden`}
        onClick={toggleMobileMenu}
      >
        <nav className={`fixed z-50 h-full w-full`}>
          <div className='min-w-1/4 sticky right-3 top-3 z-[50] ml-auto h-auto w-[70%] rounded-lg bg-white p-5 dark:bg-[#131B2A] sm:w-[40%]'>
            <button
              type='button'
              className={`${commonButtonClass} absolute right-0 top-0 m-5 h-8 w-8 rounded-lg`}
              onClick={toggleMobileMenu}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon
                className='dark:text- h-6 w-6 text-title '
                aria-hidden='true'
              />
            </button>
            <button
              className={`${commonButtonClass} absolute right-10 top-0 m-5 h-8 w-8 rounded-lg`}
              onClick={handleColorTheme}
            >
              <SunIcon width={22} />
            </button>
            <div className='flow-root'>
              <div className='-my-6 space-y-4 divide-y divide-gray-400/20'>
                <div className='ml-2 mt-6 space-y-2'>
                  {navigation.map(({ name, href, external }) => (
                    <Link
                      key={name}
                      href={href}
                      target={external ? '_blank' : '_self'}
                      className='-mx-3 block w-[90%] rounded-lg px-3 py-1 text-base font-semibold leading-7 text-title hover:bg-gray-400/10 hover:backdrop-blur-sm dark:text-white'
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className='flex space-x-3 py-6'>
                  <HeaderLink
                    href={links.discord}
                    icon='/discord-icon.svg'
                    alt="Commune's Discord Link"
                    className={commonButtonClass}
                  />
                  <HeaderLink
                    href={links.github}
                    icon='/github-icon.svg'
                    alt="Commune's Github Link"
                    className={`${commonButtonClass} mb-4`}
                  />
                  <HeaderLink
                    href={links.telegram}
                    icon='/telegram-icon.svg'
                    alt="Commune's Telegram Link"
                    className={`${commonButtonClass} pr-2`}
                  />
                  <HeaderLink
                    href={links.x}
                    icon='/x-icon.svg'
                    alt="Commune's X Link"
                    className={`${commonButtonClass} p-3.5`}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header
        className={`sticky top-0 z-40 flex w-full flex-none border-b border-gray-900/[0.06] bg-white bg-opacity-90 backdrop-blur transition-colors duration-500 dark:bg-[#131B2A] dark:text-white dark:shadow-lg`}
      >
        <nav
          className={`mx-auto grid w-full grid-flow-col grid-cols-2 p-4 px-6`}
          aria-label='Global'
        >
          <Link href={links.home} className={`col-span-1 flex items-center`}>
            <Image
              src={'/commune-logo.svg'}
              width={37}
              height={45}
              alt='commune logo'
              priority
              className='mr-[3px]'
            />
            <span className={`${cairo.className} ml-2 text-2xl font-semibold`}>
              Commune Ai
            </span>
          </Link>
          <div className='relative hidden items-center justify-end lg:flex lg:gap-x-6'>
            {navigation.map(({ name, href, external }) => (
              <Link
                key={name}
                href={href}
                target={external ? '_blank' : '_self'}
                className='flex flex-col items-center text-sm font-semibold leading-6 text-[#222222] hover:text-gray-400 dark:text-white'
              >
                {name}
              </Link>
            ))}
            <Link
              href={links.discord}
              target='_blank'
              className='rounded-xl border-2 border-title bg-white px-6 py-3 text-center text-sm font-medium text-white shadow-custom hover:animate-squeeze dark:border-titleDark dark:bg-transparent dark:shadow-customDark '
            >
              <span
                aria-label='Get started with Commune AI'
                className='text-header-links dark:text-titleDark'
              >
                {/* Get Started */}
                Join community
              </span>
            </Link>
            {/* <Link
              href={links.discord}
              className='rounded-xl border-2 border-title bg-[#FF6C6C] px-6 py-3 text-center text-sm font-medium text-title shadow-custom'
            >
              <span aria-label='Get started with Commune AI'>
                Join Community <span className='text-xs'>▼</span>
              </span>
            </Link> */}
            <button className='mt-1' onClick={handleColorTheme}>
              <SunIcon width={22} />
            </button>
          </div>
          <div className='col-span-3 ml-auto self-center lg:hidden '>
            <button
              type='button'
              className={`${commonButtonClass} -m-2.5`}
              onClick={toggleMobileMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <EllipsisVerticalIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}
