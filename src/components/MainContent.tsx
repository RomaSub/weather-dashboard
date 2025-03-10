import { useAtom } from '@reatom/npm-react'
import { fetchWeather, pastCitiesAtom } from '../features/model'
import { capitalize, currentDay, getCurrentTime } from '../utils'
import { HourlyForecast } from './HourlyForecast'
import { Skeleton } from './Sceleton'
import { StartScreen } from './StartScreen'
import { WeatherForecast } from './WeatherForecast'
import { WeatherWidget } from './WeatherWidget'

export const MainContent = () => {
  const [loadingWeather] = useAtom(fetchWeather.statusesAtom)
  const [pastCities] = useAtom(pastCitiesAtom)
  const [weather] = useAtom(fetchWeather.dataAtom)

  if (!weather?.city.name || pastCities.length === 0) return <StartScreen />

  if (loadingWeather.isPending) return <Skeleton />

  return (
    <>
      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6'>
        <div className='w-full md:w-[40%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] p-4 sm:p-6 md:p-8 shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#292929] dark:text-[#FFFFFF] mb-2 sm:mb-4'>
            {capitalize(weather?.city.name)}
          </h1>
          <p className='text-5xl sm:text-6xl md:text-8xl font-bold text-[#292929] dark:text-[#FFFFFF]'>{getCurrentTime()}</p>
          <p className='text-sm sm:text-base text-[#292929] dark:text-white mt-2'>{currentDay()}</p>
        </div>
        <div className='w-full md:w-[60%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <WeatherWidget />
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6 mt-4 sm:mt-6'>
        <div className='w-full md:w-[35%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <WeatherForecast />
        </div>

        <div className='w-full md:w-[65%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <HourlyForecast />
        </div>
      </div>
    </>
  )
}
