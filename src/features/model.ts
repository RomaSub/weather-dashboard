import {
  action,
  atom,
  reatomAsync,
  sleep,
  withAbort,
  withConcurrency,
  withDataAtom,
  withErrorAtom,
  withInit,
  withStatusesAtom,
} from '@reatom/framework'
import { withLocalStorage } from '@reatom/persist-web-storage'
import { withSearchParamsPersist } from '@reatom/url'
import type { Geo, Weather } from '../@types'
import { request } from '../utils'

const API = '2c80072dd8e783aab0ed59a3d1519728'

// атом для темы
export const isDarkAtom = atom(true, 'isDark').pipe(withLocalStorage('isDark'))

// атом для мгновенного обновления UI
export const cityInputAtom = atom('', 'inputCity').pipe(withInit(ctx => ctx.get(cityPersistAtom)))

// атом для сохранения в localstorage и url с debounce
export const cityPersistAtom = atom('', 'city').pipe(withSearchParamsPersist('city'), withLocalStorage('city'))

// Обработчик изменения города
export const handleCityChange = action(async (ctx, event) => {
  const { value } = event.currentTarget
  cityInputAtom(ctx, value)

  // debounce
  await ctx.schedule(() => sleep(500))
  cityPersistAtom(ctx, value)
}).pipe(withConcurrency())

// запрос для получения geo
export const fetchGeo = reatomAsync(
  (_, city: string) => request<Array<Geo>>(`api/geo/1.0/direct?q=${city},RU&limit=1&appid=${API}`).then(data => data[0]),
  'fetchGeo',
).pipe(withDataAtom(null), withErrorAtom(), withAbort(), withStatusesAtom())

// запрос для получения weather
export const fetchWeather = reatomAsync(
  (ctx, geo: Geo) => request<Weather>(`api/data/2.5/forecast?lat=${geo.lat}&lon=${geo.lon}&appid=${API}`, ctx.controller),
  'fetchWeather',
).pipe(withDataAtom(null), withErrorAtom(), withAbort(), withStatusesAtom())

// подписка на изменение города - при изменение города запускаем запрос геоданных
cityPersistAtom.onChange((ctx, city) => {
  if (city.trim()) fetchGeo(ctx, city)
})

// после успешного получения геоданных автоматически запускаем запрос за погодой
fetchGeo.onFulfill.onCall((ctx, geo) => {
  if (geo) fetchWeather(ctx, geo)
})

//curl https://api.openweathermap.org/data/2.5/weather?lat=55.7504461&lon=37.6174943&appid=2c80072dd8e783aab0ed59a3d1519728
// Moscow
// lat lon 55.7504461            37.6174943
