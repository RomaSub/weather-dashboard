import { Gauge, Radiation, Sun, Sunrise, Sunset, Waves, Wind } from 'lucide-react'

export const WeatherWidget = () => {
  return (
    <div className='p-6 flex flex-col md:flex-row items-center md:items-start gap-6'>
      <div className='flex flex-col justify-between md:w-1/3'>
        <div>
          <h1 className='text-6xl font-bold text-[#292929] dark:text-[#FFFFFF]'>75°F</h1>
          <div className='flex items-center mt-2 opacity-80'>
            <span className='text-lg font-semibold text-[#292929] dark:text-[#FFFFFF]'>Feels like:</span>
            <span className='text-2xl font-semibold text-[#292929] dark:text-[#FFFFFF] ml-2'>22°C</span>
          </div>
        </div>

        <div className='space-y-4 mt-6'>
          <div className='flex items-center'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Sunrise className='w-8 h-8 text-[#292929] dark:text-[#FFFFFF]' />
            </div>
            <div className='ml-4'>
              <p className='font-bold text-lg text-[#292929] dark:text-[#FFFFFF]'>Sunrise</p>
              <p className='font-semibold text-sm text-[#292929] dark:text-[#FFFFFF]'>06:37 AM</p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='w-12 h-12 flex items-center justify-center'>
              <Sunset className='w-8 h-8 text-[#292929] dark:text-[#FFFFFF]' />
            </div>
            <div className='ml-4'>
              <p className='font-bold text-lg text-[#292929] dark:text-[#FFFFFF]'>Sunset</p>
              <p className='font-semibold text-sm text-[#292929] dark:text-[#FFFFFF]'>20:37 AM</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center md:w-1/3'>
        <Sun className='w-40 h-40 text-amber-400 drop-shadow-md' strokeWidth={1.5} />
        <h2 className='text-2xl font-bold text-[#292929] dark:text-[#FFFFFF] mt-10'>Sunny</h2>
      </div>

      <div className='grid grid-cols-2 gap-6 md:w-1/3'>
        <div className='flex flex-col items-center'>
          <div className='w-14 h-14 flex items-center justify-center'>
            <Waves className='w-10 h-10 text-[#292929] dark:text-white' />
          </div>
          <div className='mt-2 text-center'>
            <p className='text-xl font-semibold text-[#292929] dark:text-white'>41%</p>
            <p className='text-sm font-medium text-[#292929] dark:text-white'>Humidity</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-14 h-14 flex items-center justify-center'>
            <Wind className='w-10 h-10 text-[#292929] dark:text-white' />
          </div>

          <div className='mt-2 text-center'>
            <p className='text-xl font-semibold text-[#292929] dark:text-white'>2km/h</p>
            <p className='text-sm font-medium text-[#292929] dark:text-white'>Wind speed</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-14 h-14 flex items-center justify-center'>
            <Gauge className='w-10 h-10 text-[#292929] dark:text-white' />
          </div>

          <div className='mt-2 text-center'>
            <p className='text-xl font-semibold text-[#292929] dark:text-white'>997hPa</p>
            <p className='text-sm font-medium text-[#292929] dark:text-white'>Pressure</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='w-14 h-14 flex items-center justify-center'>
            <Radiation className='w-10 h-10 text-[#292929] dark:text-white' />
          </div>

          <div className='mt-2 text-center'>
            <p className='text-xl font-semibold text-[#292929] dark:text-white'>8</p>
            <p className='text-sm font-medium text-[#292929] dark:text-white'>UV</p>
          </div>
        </div>
      </div>
    </div>
  )
}
