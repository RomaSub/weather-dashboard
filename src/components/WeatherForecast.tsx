import { useAtom } from '@reatom/npm-react'
import { fetchWeather } from '../features/model'
import { formatDate } from '../utils'

export const WeatherForecast = () => {
  const [weather] = useAtom(fetchWeather.dataAtom)

  return (
    <div className='p-4 sm:p-5'>
      <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#292929] dark:text-[#FFFFFF] text-center mb-3 sm:mb-4'>
        5 Days Forecast:
      </h2>
      <div className='space-y-2'>
        {weather?.list.map(({ date, items }, ind) => (
          <div key={ind} className='grid grid-cols-3 items-center'>
            <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ml-2 sm:ml-5'>
              <img
                src={`https://openweathermap.org/img/wn/${items[0].weather[0].icon}@2x.png`}
                className='w-10 h-10 sm:w-12 sm:h-12 drop-shadow-md'
              />
            </div>
            <div className='text-lg sm:text-xl md:text-2xl font-bold text-[#292929] dark:text-[#FFFFFF] ml-1 sm:ml-3'>
              {Math.round(items[0].main.temp)}°C
            </div>
            <div className='text-sm sm:text-base md:text-lg font-bold text-[#292929] dark:text-[#FFFFFF]'>{formatDate(date)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
