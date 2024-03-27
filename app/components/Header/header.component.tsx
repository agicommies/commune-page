'use client'
import Image from 'next/image'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { links } from '@/app/utils'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

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
  { name: 'Docs', href: links.docs, external: false },
  { name: 'Whitepaper', href: links.whitepaper, external: true },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const commonButtonClass =
    'flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 text-white p-1.5 hover:bg-gray-100/[0.15]'

  return (
    <>
      <div
        className={`absolute z-50 h-full w-full backdrop-blur-sm ${mobileMenuOpen ? 'visible' : 'hidden'} animate-menu-fade lg:hidden`}
        onClick={toggleMobileMenu}
      >
        <nav className={`fixed z-50 h-full w-full`}>
          <div className='min-w-1/4 sticky right-3 top-3 z-[50] ml-auto h-auto w-[70%] rounded-lg bg-gray-800 p-5 sm:w-[40%]'>
            <button
              type='button'
              className={`${commonButtonClass} absolute right-0 top-0 m-5 h-8 w-8 rounded-lg`}
              onClick={toggleMobileMenu}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='w-6 h-6' aria-hidden='true' />
            </button>
            <div className='flow-root'>
              <div className='-my-6 space-y-4 divide-y divide-gray-400/20'>
                <div className='mt-6 ml-2 space-y-2'>
                  {navigation.map(({ name, href, external }) => (
                    <Link
                      key={name}
                      href={href}
                      target={external ? '_blank' : '_self'}
                      className='-mx-3 block w-[90%] rounded-lg px-3 py-1 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-400/10 hover:backdrop-blur-sm'
                    >
                      {name}
                    </Link>
                  ))}
                </div>
                <div className='flex py-6 space-x-3'>
                  <HeaderLink
                    href={links.github}
                    icon='/github-icon-white.svg'
                    alt="Commune's Github Link"
                    className={`${commonButtonClass} mb-4`}
                  />
                  <HeaderLink
                    href={links.discord}
                    icon='/discord-icon-white.svg'
                    alt="Commune's Discord Link"
                    className={commonButtonClass}
                  />
                  <HeaderLink
                    href={links.telegram}
                    icon='/telegram-icon-white.svg'
                    alt="Commune's Telegram Link"
                    className={`${commonButtonClass} pr-2`}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header
        className={`sticky top-0 z-40 flex w-full flex-none border-b border-gray-50/[0.06] backdrop-blur transition-colors duration-500`}
      >
        <nav
          className={`mx-auto grid w-full grid-flow-col grid-cols-3 items-center justify-between p-4 px-6`}
          aria-label='Global'
        >
          <Link href={links.home} className={`col-span-1 ${commonButtonClass}`}>
            <span className='sr-only'>Commune AI</span>
            <Image
              src={'/commune-logo.svg'}
              width={25}
              height={25}
              alt='commune logo'
              priority
              className='mr-[3px]'
            />
          </Link>
          <div className='justify-center hidden lg:flex lg:gap-x-12'>
            {navigation.map(({ name, href, external }) => (
              <Link
                key={name}
                href={href}
                target={external ? '_blank' : '_self'}
                className='text-sm font-semibold leading-6 text-gray-100 hover:text-gray-400'
              >
                {name}
              </Link>
            ))}
          </div>
          <div className='justify-end hidden lg:flex lg:gap-x-4'>
            <HeaderLink
              href={links.github}
              icon='/github-icon-white.svg'
              alt="Commune's Github Link"
              className={commonButtonClass}
            />
            <HeaderLink
              href={links.discord}
              icon='/discord-icon-white.svg'
              alt="Commune's Discord Link"
              className={commonButtonClass}
            />
            <HeaderLink
              href={links.telegram}
              icon='/telegram-icon-white.svg'
              alt="Commune's Telegram Link"
              className={`${commonButtonClass} pr-2`}
            />
          </div>
          <div className='col-span-3 ml-auto lg:hidden '>
            <button
              type='button'
              className={`${commonButtonClass} -m-2.5`}
              onClick={toggleMobileMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <EllipsisVerticalIcon className='w-6 h-6' aria-hidden='true' />
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}