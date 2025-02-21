import { useAction, useAtom } from '@reatom/npm-react'
import { Button, Input, Spin } from 'antd'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { cityInputAtom, fetchWeather, handleCityChange } from './features/model'
import { useEffect } from 'react'

export const App = () => {
  const [city] = useAtom(cityInputAtom)
  const handleChange = useAction(handleCityChange)
  const [weather] = useAtom(fetchWeather.dataAtom)
  const [loadingWeather] = useAtom(fetchWeather.statusesAtom)
  const [isError] = useAtom(fetchWeather.errorAtom)

  //if (isError) return <Alert message={`${isError}`} type='error' />
  console.log(weather)

  return (
    <>
      <ThemeSwitcher />
      <Input value={city} onChange={handleChange} />
      {loadingWeather.isPending && <Spin />}
    </>
  )
}
