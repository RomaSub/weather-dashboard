import {
  action,
  atom,
  onConnect,
  reatomAsync,
  sleep,
  withCache,
  withConcurrency,
  withDataAtom,
  withInit,
  withStatusesAtom,
} from '@reatom/framework'
import { withLocalStorage } from '@reatom/persist-web-storage'
import { withUndo } from '@reatom/undo'
import { withSearchParamsPersist } from '@reatom/url'
import toast from 'react-hot-toast'
import type { Weather } from '../@types'
import { groupWeather, request } from '../utils'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const isDarkAtom = atom(true, 'isDark').pipe(withLocalStorage('isDark'))

export const cityInputAtom = atom('', 'inputCity').pipe(withInit(ctx => ctx.get(cityPersistAtom)))

export const cityPersistAtom = atom('', 'city').pipe(withSearchParamsPersist('city')).pipe(withUndo())

export const pastCitiesAtom = atom(new Array<string>(), 'pastCities').pipe(withLocalStorage('pastCities'))

export const selectPastCity = action((ctx, city) => {
  cityInputAtom(ctx, city)
  cityPersistAtom(ctx, city)
})

export const handleCityChange = action(async (ctx, event) => {
  const { value } = event.currentTarget
  cityInputAtom(ctx, value)

  await ctx.schedule(() => sleep(500))

  if (value.trim()) cityPersistAtom(ctx, value)
}).pipe(withConcurrency())

export const fetchWeather = reatomAsync(
  (ctx, city: string) =>
    request<Weather>(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`, ctx.controller).then(
      groupWeather,
    ),
  'fetchWeather',
).pipe(withDataAtom(null), withStatusesAtom(), withCache())

fetchWeather.onReject.onCall((ctx, error) => {
  console.error('Weather fetch error:', error)

  cityPersistAtom.undo(ctx)
  toast.error('City not found.', {
    duration: 2000,
    style: {
      background: ctx.get(isDarkAtom) ? '#444444' : '#D9D9D9',
      color: ctx.get(isDarkAtom) ? '#FFFFFF' : '#292929',
    },
  })
})

onConnect(fetchWeather.dataAtom, ctx => {
  const lastCity = ctx.get(pastCitiesAtom)[0]
  const city = ctx.get(cityPersistAtom)
  if (city.trim()) fetchWeather(ctx, city)
  else cityPersistAtom(ctx, lastCity)
})

cityPersistAtom.onChange((ctx, city) => {
  if (city.trim()) fetchWeather(ctx, city)
})

fetchWeather.onFulfill.onCall(ctx => {
  const currentCity = ctx.get(cityPersistAtom).trim()
  if (currentCity) {
    pastCitiesAtom(ctx, (prevCities = []) => {
      const withoutCurrent = prevCities.filter(city => city !== currentCity)
      const updated = [currentCity, ...withoutCurrent]
      return updated.slice(0, 3)
    })
  }
})
