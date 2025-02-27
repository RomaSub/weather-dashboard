import { useAction, useAtom } from '@reatom/npm-react'
import { Search } from 'lucide-react'
import { cityInputAtom, handleCityChange } from '../features/model'

export const SearchBar = () => {
  const [city] = useAtom(cityInputAtom)
  const handleChange = useAction(handleCityChange)

  return (
    <div className='flex-1 mx-8 relative'>
      <Search className='text-[#292929] dark:text-[#FFFFFF] absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5' />
      <input
        value={city}
        onChange={handleChange}
        type='text'
        placeholder='Search for your preffered city...'
        className='
        border-1 border-black dark:border-0 w-full h-12 py-2 px-12 rounded-full bg-[#D9D9D9] dark:bg-[#444444] text-black dark:text-white placeholder:text-gray-400 dark:drop-shadow-lg shadow-black'
      />
    </div>
  )
}
