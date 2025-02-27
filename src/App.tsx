import { HourlyForecast } from './components/HourlyForecast'
import { LocationButton } from './components/LocationButton'
import { SearchBar } from './components/SearchBar'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { WeatherForecast } from './components/WeatherForecast'
import { WeatherWidget } from './components/WeatherWidget'

export const App = () => {
  return (
    <div className='min-h-screen p-10 bg-[#FFFFFF] dark:bg-[#333333]'>
      <div className='flex items-center justify-between gap-4 mb-8'>
        <ThemeSwitcher />
        <SearchBar />
        <LocationButton />
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-6 md-6'>
        <div className='w-full md:w-[40%] bg-[#D9D9D9] dark:bg-[#444444] rounded-[30px] p-8 shadow-[10px_10px_4px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-[#292929] dark:text-[#FFFFFF] mb-4'>Athens</h1>
          <p className='text-8xl font-bold text-[#292929] dark:text-[#FFFFFF]'>09:03</p>
          <p className='text-[#292929] dark:text-white mt-2'>Thursday, 31 Aug</p>
        </div>
        <div className='w-full md:w-[60%] bg-[#D9D9D9] dark:bg-[#444444] rounded-[30px] shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <WeatherWidget />
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-6 mt-6'>
        <div className='w-full md:w-[35%] bg-[#D9D9D9] dark:bg-[#444444] rounded-[30px] shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <WeatherForecast />
        </div>

        <div className='w-full md:w-[65%] bg-[#D9D9D9] dark:bg-[#444444] rounded-[30px] shadow-[10px_10px_4px_rgba(0,0,0,0.5)]'>
          <HourlyForecast />
        </div>
      </div>
    </div>
  )
}

//export const App = () => {
//  const [city] = useAtom(cityInputAtom)
//  const handleChange = useAction(handleCityChange)
//  const [weather] = useAtom(fetchWeather.dataAtom)
//  const [loadingWeather] = useAtom(fetchWeather.statusesAtom)
//  const [isError] = useAtom(fetchWeather.errorAtom)
//
//  //if (isError) return <Alert message={`${isError}`} type='error' />
//  console.log(weather)
//
//  return (
//    <>
//      <ThemeSwitcher />
//      <Input value={city} onChange={handleChange} />
//      {loadingWeather.isPending && <Spin />}
//    </>
//  )
//       <div className='
//        min-h-screen p-10
//        bg-[linear-gradient(112.65deg,_#FFFFFF_0.28%,_#466173_178.65%)]
//        dark:bg-[linear-gradient(110.05deg,_#383838_0%,_#9e9e9e_71.82%)]
//        dark:filter dark:drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
//      '>
//
//       <div className='min-h-screen p-10 bg-[#FFFFFF] dark:bg-[#444444]'>
