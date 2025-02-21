import { useAtom } from '@reatom/npm-react'
import { Switch } from 'antd'
import { useEffect } from 'react'
import { isDarkAtom } from '../features/model'

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useAtom(isDarkAtom)

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = '#000'
    } else {
      document.body.style.background = 'transparent'
    }
  }, [darkMode])

  return <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
}
