import { useAtom } from '@reatom/npm-react'
import { Sun, Cloud, Navigation } from 'lucide-react'
import { isDarkAtom } from '../features/model'

export const HourlyForecast = () => {
  const [isDarkMode] = useAtom(isDarkAtom)
  const forecastData = [
    {
      hour: '12:00',
      temperature: '26°C',
      windSpeed: '3km/h',
      icon: 'clear',
      windDirection: 0,
      gradient: 'bg-gradient-to-b from-orange-400 to-orange-100',
    },
    {
      hour: '15:00',
      temperature: '27°C',
      windSpeed: '2km/h',
      icon: 'clear',
      windDirection: -30,
      gradient: 'bg-gradient-to-b from-orange-400 to-orange-100',
    },
    {
      hour: '18:00',
      temperature: '27°C',
      windSpeed: '2km/h',
      icon: 'cloudy',
      windDirection: 0,
      gradient: 'bg-gradient-to-b from-orange-400 to-orange-100',
    },
    {
      hour: '21:00',
      temperature: '25°C',
      windSpeed: '3km/h',
      icon: 'cloudy',
      windDirection: 30,
      gradient: 'bg-gradient-to-b from-indigo-800 to-indigo-300/0',
    },
    {
      hour: '00:00',
      temperature: '22°C',
      windSpeed: '3km/h',
      icon: 'clear',
      windDirection: 0,
      gradient: 'bg-gradient-to-b from-indigo-800 to-indigo-300/0',
    },
  ]
  return (
    <div className='pt-5'>
      <h2 className='text-3xl font-bold text-[#292929] dark:text-[#FFFFFF] text-center mb-2'>Hourly Forecast:</h2>
      <div className='flex justify-center gap-4 overflow-x-auto '>
        {forecastData.map((forecast, ind) => (
          <div
            key={ind}
            className={`relative w-[130px] h-[250px] rounded-[40px] ${isDarkMode ? 'bg-[#373636]' : forecast.gradient} flex flex-col items-center py-4`}>
            <div className='text-2xl font-bold text-[#292929] dark:text-[#FFFFFF]'>{forecast.hour}</div>

            <div className='flex flex-col items-center justify-between h-full pb-4'>
              <div className='flex flex-col items-center  mb-3'>
                {forecast.icon === 'clear' ? (
                  <Sun className='w-17 h-17 text-yellow-400 drop-shadow-md' />
                ) : (
                  <Cloud className='w-17 h-17 text-yellow-400 drop-shadow-md' />
                )}
                <p className='text-xl font-bold text-[#292929] dark:text-[#FFFFFF] mt-2'>{forecast.temperature}</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative w-14 h-14 flex items-center justify-center'>
                  <Navigation
                    className='w-14 h-14 text-blue-400 drop-shadow-md'
                    style={{ transform: `rotate(${forecast.windDirection}deg)` }}
                  />
                </div>
                <div className='text-lg font-bold text-[#292929] dark:text-[#FFFFFF]'>{forecast.windSpeed}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
