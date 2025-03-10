import { useAtom } from '@reatom/npm-react'
import { Locate } from 'lucide-react'
import { fetchWeather } from '../features/model'
import { capitalize } from '../utils'

export const LocationButton = () => {
  const [weather] = useAtom(fetchWeather.dataAtom)

  return (
    <div className='font-bold flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#4CBB17] text-white rounded-full text-xs sm:text-sm whitespace-nowrap'>
      <Locate className='w-4 h-4 sm:w-5 sm:h-5' />
      {capitalize(weather?.city.name) || 'Current Location'}
    </div>
  )
}
