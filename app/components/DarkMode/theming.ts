import { getCookie, setCookie } from "@/app/utils"

const THEME_KEY = 'theme'
export const DARK_THEME_CLASSNAME = 'dark'
export const LIGHT_THEME_CLASSNAME = 'light'

export type TThemes = typeof DARK_THEME_CLASSNAME| typeof LIGHT_THEME_CLASSNAME

export function getStoredTheme() {
    const theme = getCookie(THEME_KEY) as TThemes
    if(!theme) return setDefaultSystemTheme()
    return theme
}

const setThemeCookie = (value: string) => {
  return setCookie(THEME_KEY, value)
}

const setDefaultSystemTheme = () => {
  if (isThemeSystemDark()) {
    setThemeCookie(DARK_THEME_CLASSNAME)
    return DARK_THEME_CLASSNAME
  }
  
  setThemeCookie(LIGHT_THEME_CLASSNAME)
  return LIGHT_THEME_CLASSNAME
}

const removeThemeClassname = (themeClassName: TThemes) => {
  if(themeClassName === LIGHT_THEME_CLASSNAME) return DARK_THEME_CLASSNAME
  return LIGHT_THEME_CLASSNAME
}

export function setTheme(theme: TThemes) {

  const root = getHtml()

  root.classList.remove(removeThemeClassname(theme))

  const setThemeCookieDark = () => {
    root.classList.add(DARK_THEME_CLASSNAME)
    return setThemeCookie(DARK_THEME_CLASSNAME)
  }

  const setThemeCookieLight = () => {
    root.classList.add(LIGHT_THEME_CLASSNAME)
    return setThemeCookie(LIGHT_THEME_CLASSNAME)
  }

  switch(theme){
    case DARK_THEME_CLASSNAME:
      setThemeCookieDark()
      break;
    case LIGHT_THEME_CLASSNAME:
      setThemeCookieLight()
      break;
  }
}

function getHtml() {
  return document.firstElementChild as HTMLHtmlElement
}

export function isThemeSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches

}