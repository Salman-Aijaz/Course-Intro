'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <button
      className="rounded-md p-5  cursor-pointer"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  )
}
