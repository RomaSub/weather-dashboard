import { Cloud, CloudDrizzle, CloudRain, CloudSun, Sun } from 'lucide-react'

export const WeatherForecast = () => {
  const forecastData = [
    {
      day: 'Friday, 1 Sep',
      temperature: '20°C',
      icon: Cloud,
    },
    {
      day: 'Saturday, 2 Sep',
      temperature: '22°C',
      icon: CloudSun,
    },
    {
      day: 'Sunday, 3 Sep',
      temperature: '27°C',
      icon: Sun,
    },
    {
      day: 'Monday, 4 Sep',
      temperature: '18°C',
      icon: CloudDrizzle,
    },
    {
      day: 'Tuesday, 5 Sep',
      temperature: '16°C',
      icon: CloudRain,
    },
  ]

  return (
    <div className='p-5'>
      <h2 className='text-3xl font-bold text-[#292929] dark:text-[#FFFFFF] text-center mb-4'>5 Days Forecast:</h2>
      <div className='space-y-2'>
        {forecastData.map((forecast, ind) => (
          <div key={ind} className='grid grid-cols-3 items-center'>
            <div className='w-10 h-10 flex items-center justify-center ml-5'>
              <forecast.icon className='w-10 h-12 text-amber-400 drop-shadow-md' />
            </div>
            <div className='text-2xl font-bold text-[#292929] dark:text-[#FFFFFF] ml-3'>{forecast.temperature}</div>
            <div className='text-lg font-bold text-[#292929] dark:text-[#FFFFFF]'>{forecast.day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
