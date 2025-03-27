import { useAction, useAtom } from '@reatom/npm-react'
import { Search } from 'lucide-react'
import { useState, useRef } from 'react'
import { cityAtom, submitAction, fetchCities } from '../../features/model'

export const SearchBar = () => {
  const [city, setCity] = useAtom(cityAtom)
  const submit = useAction(submitAction)
  const [cities] = useAtom(fetchCities.dataAtom)
  const [loading] = useAtom(fetchCities.statusesAtom)
  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <form
      onSubmit={e => {
        ref.current?.blur()
        submit(e, '')
      }}
      className='w-full sm:flex-1 sm:mx-4 md:mx-6 lg:mx-8 relative filter dark:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <button className='cursor-pointer'>
        <Search color='grey' className='absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5' />
      </button>
      <input
        value={city}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => setCity(e.currentTarget.value)}
        type='text'
        placeholder='Search for your preffered city...'
        className='
        border-1 border-black dark:border-0 w-full h-10 sm:h-12 py-2 px-10 sm:px-12 text-sm sm:text-base rounded-full bg-w2 dark:bg-b2 text-black dark:text-white placeholder:text-gray-400 focus:outline-none'
      />
      {isFocused && cities && city.trim().length >= 1 && (
        <ul className='scrollbar-thin absolute top-full left-0 right-0 bg-w2 dark:bg-b2 text-black dark:text-white mt-1 rounded-lg shadow-lg max-h-50 overflow-auto z-50'>
          {loading.isPending && (
            <li className='px-4 py-2'>
              <div className='w-4 h-4 sm:w-5 sm:h-5 border-1 text-grey-900 border-t-transparent rounded-full animate-spin' />
            </li>
          )}
          {cities?.map((city, ind) => (
            <li
              key={ind}
              className='px-4 py-2 dark:hover:bg-[#373636] hover:bg-[#C0C0C0] cursor-pointer'
              onMouseDown={e => {
                ref.current?.blur()
                submit(e, city.name)
              }}>
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </form>
  )
}
