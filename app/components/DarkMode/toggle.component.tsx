'use client'
import { useEffect, useState } from 'react'

import {
  DARK_THEME_CLASSNAME,
  LIGHT_THEME_CLASSNAME,
  TThemes,
  getStoredTheme,
  setTheme,
} from './theming'

import {
  SunIcon,
  MoonIcon,
} from '@heroicons/react/20/solid'


export const DarkModeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState<TThemes | null>(null)
  const [icon, setIcon] = useState<React.ReactNode>(null)

  const handleTheme = (theme: TThemes) => {
    if (theme === DARK_THEME_CLASSNAME) return setCurrentTheme(LIGHT_THEME_CLASSNAME)
    return setCurrentTheme(DARK_THEME_CLASSNAME)
  }

  useEffect(() => {
    if (!currentTheme) return

    setTheme(currentTheme)
    const handleIcon = () => {

      if (currentTheme === DARK_THEME_CLASSNAME) {
        return <SunIcon className={`h-6 dark:fill-title dark:fill-darkTitle lg:dark:fill-white`} />
      }

      return <MoonIcon className={'h-6 dark:fill-title md:dark:fill-white'} />
    }

    setIcon(handleIcon())
  }, [currentTheme])

  useEffect(() => {
    setCurrentTheme(getStoredTheme() as TThemes)
  }, [])

  return (
    <>
      <button
        type='button'
        className='inline-flex items-center justify-center rounded-xl p-1 hover:bg-gray-100 focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 dark:fill-title dark:ring-offset-transparent dark:hover:bg-gray-200 lg:dark:hover:bg-[#0C1320] dark:focus:ring-titleDark'
        onClick={() => handleTheme(currentTheme as TThemes)}
      >
        {icon}
      </button>
    </>
  )
}
