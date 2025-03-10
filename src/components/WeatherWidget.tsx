import { useAtom } from '@reatom/npm-react'
import { Gauge, Radiation, Sunrise, Sunset, Waves, Wind } from 'lucide-react'
import { fetchWeather } from '../features/model'
import { formatUnixTimestamp } from '../utils'

export const WeatherWidget = () => {
  const [weather] = useAtom(fetchWeather.dataAtom)
  const [loadingWeather] = useAtom(fetchWeather.statusesAtom)

  if (loadingWeather.isPending || !weather) return

  const day = weather?.today.items[0]

  return (
    <div className='p-4 sm:p-6 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6'>
      <div className='flex flex-col justify-between md:w-1/3'>
        <div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#292929] dark:text-[#FFFFFF] text-center md:text-left'>
            {Math.round(day.main.temp)}°C
          </h1>
          <div className='flex items-center justify-center md:justify-start mt-2 opacity-80'>
            <span className='text-sm sm:text-base md:text-lg font-semibold text-[#292929] dark:text-[#FFFFFF]'>Feels like:</span>
            <span className='text-lg sm:text-xl md:text-2xl font-semibold text-[#292929] dark:text-[#FFFFFF] ml-2'>
              {Math.round(day.main.feels_like)}°C
            </span>
          </div>
        </div>

        <div className='space-y-0 sm:space-y-4 mt-4 sm:mt-6 flex flex-row md:flex-col justify-center md:justify-start gap-4 md:gap-0'>
          <div className='flex items-center'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
              <Sunrise className='w-6 h-6 sm:w-8 sm:h-8 text-[#292929] dark:text-[#FFFFFF]' />
            </div>
            <div className='ml-2 sm:ml-4'>
              <p className='font-bold text-sm sm:text-base md:text-lg text-[#292929] dark:text-[#FFFFFF]'>Sunrise</p>
              <p className='font-semibold text-xs sm:text-sm text-[#292929] dark:text-[#FFFFFF]'>
                {formatUnixTimestamp(weather?.city.sunrise)}
              </p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center'>
              <Sunset className='w-6 h-6 sm:w-8 sm:h-8 text-[#292929] dark:text-[#FFFFFF]' />
            </div>
            <div className='ml-2 sm:ml-4'>
              <p className='font-bold text-sm sm:text-base md:text-lg text-[#292929] dark:text-[#FFFFFF]'>Sunset</p>
              <p className='font-semibold text-xs sm:text-sm text-[#292929] dark:text-[#FFFFFF]'>
                {formatUnixTimestamp(weather?.city.sunset)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center md:w-1/3 my-2 md:my-0'>
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          className='w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 text-amber-400 drop-shadow-md'
        />
        <h2 className='text-xl sm:text-2xl font-bold text-[#292929] dark:text-[#FFFFFF] mt-4 sm:mt-6 md:mt-10'>
          {day.weather[0].main}
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 md:w-1/3'>
        <div className='flex flex-col items-center'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center'>
            <Waves className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#292929] dark:text-white' />
          </div>
          <div className='mt-1 sm:mt-2 text-center'>
            <p className='text-base sm:text-lg md:text-xl font-semibold text-[#292929] dark:text-white'>{day.main.humidity}%</p>
            <p className='text-xs sm:text-sm font-medium text-[#292929] dark:text-white'>Humidity</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center'>
            <Wind className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#292929] dark:text-white' />
          </div>

          <div className='mt-1 sm:mt-2 text-center'>
            <p className='text-base sm:text-lg md:text-xl font-semibold text-[#292929] dark:text-white'>
              {Math.round(day.wind.speed)}km/h
            </p>
            <p className='text-xs sm:text-sm font-medium text-[#292929] dark:text-white'>Wind speed</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center'>
            <Gauge className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#292929] dark:text-white' />
          </div>

          <div className='mt-1 sm:mt-2 text-center'>
            <p className='text-base sm:text-lg md:text-xl font-semibold text-[#292929] dark:text-white'>{day.main.pressure}hPa</p>
            <p className='text-xs sm:text-sm font-medium text-[#292929] dark:text-white'>Pressure</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center'>
            <Radiation className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#292929] dark:text-white' />
          </div>

          <div className='mt-1 sm:mt-2 text-center'>
            <p className='text-base sm:text-lg md:text-xl font-semibold text-[#292929] dark:text-white'>8</p>
            <p className='text-xs sm:text-sm font-medium text-[#292929] dark:text-white'>UV</p>
          </div>
        </div>
      </div>
    </div>
  )
}
