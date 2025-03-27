import { useAtom } from '@reatom/npm-react'
import { fetchWeather, pastCitiesAtom } from '../../features/model'
import { capitalize, getCityTime, currentDay } from '../../utils'
import { ErrorScreen } from '../ui/ErrorScreen'
import { Skeleton } from '../ui/Skeleton'
import { StartScreen } from '../ui/StartScreen'
import { HourlyForecast } from './HourlyForecast'
import { WeatherForecast } from './WeatherForecast'
import { WeatherWidget } from './WeatherWidget'

export const MainContent = () => {
  const [loadingWeather] = useAtom(fetchWeather.statusesAtom)
  const [error] = useAtom(fetchWeather.errorAtom)
  const [pastCities] = useAtom(pastCitiesAtom)
  const [weather] = useAtom(fetchWeather.dataAtom)

  if (error) return <ErrorScreen error={error.message} />

  if (pastCities.length === 0) return <StartScreen />

  if (loadingWeather.isPending || !weather?.city.name) return <Skeleton />

  return (
    <>
      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6'>
        <div className='w-full md:w-[40%] bg-w2 dark:bg-b2 rounded-2xl sm:rounded-[30px] p-4 sm:p-6 md:p-8 shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-w3 dark:text-b3 mb-2 sm:mb-4'>
            {capitalize(weather?.city.name)}
          </h1>
          <p className='text-5xl sm:text-6xl md:text-8xl font-bold text-w3 dark:text-b3'>{getCityTime(weather.city.timezone)}</p>
          <p className='text-sm sm:text-base text-w3 dark:text-b3 mt-2'>{currentDay()}</p>
        </div>
        <div className='w-full md:w-[60%] bg-w2 dark:bg-b2 rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <WeatherWidget />
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6 mt-4 sm:mt-6'>
        <div className='w-full md:w-[35%] bg-w2 dark:bg-b2 rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <WeatherForecast />
        </div>

        <div className='w-full md:w-[65%] bg-w2 dark:bg-b2 rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <HourlyForecast />
        </div>
      </div>
    </>
  )
}
