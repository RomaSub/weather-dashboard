import { useAtom } from '@reatom/npm-react'
import { useEffect } from 'react'
import { isDarkAtom } from '../features/model'

export const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useAtom(isDarkAtom)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className='flex flex-col items-center gap-2 -mb-4'>
      <div
        className='border-1 border-black w-19 h-7 bg-[#D9D9D9] rounded-full p-1 cursor-pointer dark:drop-shadow-lg shadow-black'
        onClick={() => setDarkMode(!darkMode)}>
        <div
          className={`w-5 h-5 rounded-full transition-transform duration-200 bg-[#111111] ${darkMode ? 'translate-x-12' : 'translate-x-0'}`}
        />
      </div>
      <span className='text-sm font-bold text-black dark:text-white'>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  )
}
