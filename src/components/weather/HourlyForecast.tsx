import { useAtom } from '@reatom/npm-react'
import { Navigation } from 'lucide-react'
import { isDarkAtom, fetchWeather } from '../../features/model'
import { getHourlyGradient } from '../../utils'

export const HourlyForecast = () => {
  const [isDarkMode] = useAtom(isDarkAtom)
  const [weather] = useAtom(fetchWeather.dataAtom)

  return (
    <div className='pt-4 sm:pt-5'>
      <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-w3 dark:text-b3 text-center mb-2'>Hourly Forecast:</h2>
      <div className='flex justify-start lg:justify-center gap-3 sm:gap-4 overflow-x-auto pb-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'>
        {weather?.today.items.map((item, ind) => (
          <div
            key={ind}
            className={`relative flex-shrink-0 w-[100px] sm:w-[130px] h-[200px] sm:h-[250px] rounded-3xl sm:rounded-[40px] ${isDarkMode ? 'bg-[#373636]' : getHourlyGradient(item.dt_txt)} flex flex-col items-center py-3 sm:py-4`}>
            <div className='text-lg sm:text-xl md:text-2xl font-bold text-[#292929] dark:text-[#FFFFFF]'>
              {item.dt_txt.split(' ')[1].slice(0, 5)}
            </div>
            <div className='flex flex-col items-center justify-between h-full pb-3 sm:pb-4'>
              <div className='flex flex-col items-center mb-2 sm:mb-3'>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  className='w-14 h-14 sm:w-17 sm:h-17 text-yellow-400 drop-shadow-md'
                />
                <p className='text-base sm:text-lg md:text-xl font-bold text-w3 dark:text-b3 mt-1 sm:mt-2'>
                  {Math.round(item.main.temp)}°C
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center'>
                  <Navigation
                    className='w-10 h-10 sm:w-14 sm:h-14 text-blue-400 drop-shadow-md'
                    style={{ transform: `rotate(${item.wind.deg}deg)` }}
                  />
                </div>
                <div className='text-base sm:text-lg font-bold text-w3 dark:text-b3'>{Math.round(item.wind.speed)}km/h</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
