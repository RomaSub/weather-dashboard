import { useAction, useAtom } from '@reatom/npm-react'
import { Search } from 'lucide-react'
import { cityInputAtom, fetchGeo, fetchWeather, handleCityChange } from '../features/model'

export const SearchBar = () => {
  const [city] = useAtom(cityInputAtom)
  const handleChange = useAction(handleCityChange)
  const [loadingWeather] = useAtom(fetchWeather.statusesAtom)
  const [loadingCity] = useAtom(fetchGeo.statusesAtom)

  return (
    <div className='flex-1 mx-8 relative filter dark:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <Search color='grey' className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5' />
      <input
        value={city}
        onChange={handleChange}
        type='text'
        placeholder='Search for your preffered city...'
        className='
        border-1 border-black dark:border-0 w-full h-12 py-2 px-12 rounded-full bg-[#D9D9D9] dark:bg-[#444444] text-black dark:text-white placeholder:text-gray-400 focus:outline-none'
      />
      {loadingWeather.isPending ||
        (loadingCity.isPending && (
          <div className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin' />
        ))}
    </div>
  )
}
