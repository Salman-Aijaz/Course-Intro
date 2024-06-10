'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      className={`rounded-md p-5 ${isDark ? '' : 'bg-gray-50'} cursor-pointer`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  )
}
