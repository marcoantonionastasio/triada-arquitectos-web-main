'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { clsx } from 'clsx';

import styles from '@/app/page.module.css'

export function SwitchThemeButton() {
  const [mounted, setMounted] = useState(false)
  // Theme Switch State
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type='button'
      className={`${styles.sizeIcon} ${styles.iconTheme}`}
      onClick={() => currentTheme == 'dark' ? setTheme('light') : setTheme('dark') }
    >
      <i className={clsx(
        'text-black dark:text-white',
        currentTheme === 'dark' ? 'icon-Claro-16px' : 'icon-Obscuro-16px'
      )}></i>
    </button>
  )
}
