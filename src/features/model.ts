import {
  action,
  atom,
  AtomMut,
  BooleanAtom,
  concurrent,
  onConnect,
  reatomAsync,
  reatomBoolean,
  sleep,
  withCache,
  withDataAtom,
  withErrorAtom,
  withStatusesAtom,
} from '@reatom/framework'
import { withLocalStorage } from '@reatom/persist-web-storage'
import { withSearchParamsPersist } from '@reatom/url'
import { City, Weather } from '../@types'
import { groupWeather, request } from '../utils'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_WEATHER_KEY = import.meta.env.VITE_API_WEATHER_KEY

export const isDarkAtom: BooleanAtom = reatomBoolean(true).pipe(withLocalStorage('isDarkAtom'))

export const cityAtom = atom('').pipe(withSearchParamsPersist('city'))

export const pastCitiesAtom: AtomMut<string[]> = atom(new Array<string>(), 'pastCities').pipe(withLocalStorage('pastCities'))

export const selectPastCity = action((ctx, city) => {
  cityAtom(ctx, city)
  fetchWeather(ctx, city)
})

cityAtom.onChange(
  concurrent(async (ctx, city) => {
    await ctx.schedule(() => sleep(100))
    if (city.trim().length >= 1) await ctx.schedule(() => fetchCities(ctx, city))
  }),
)

export const submitAction = action((ctx, e, cityName?: string) => {
  e.preventDefault()
  if (cityName) cityAtom(ctx, cityName)
  const city = cityName || ctx.get(cityAtom)
  if (city.trim()) fetchWeather(ctx, city)
})

export const fetchCities = reatomAsync(
  (ctx, city: string) =>
    request<Array<City>>(`${API_BASE_URL}/geo/1.0/direct?q=${city}&limit=5&appid=${API_WEATHER_KEY}`, ctx.controller),
  'fetchCities',
).pipe(withDataAtom(null), withStatusesAtom(), withCache())

export const fetchWeather = reatomAsync(
  (ctx, city: string) =>
    request<Weather>(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_WEATHER_KEY}&units=metric`, ctx.controller).then(
      groupWeather,
    ),
  'fetchWeather',
).pipe(withDataAtom(null), withStatusesAtom(), withCache(), withErrorAtom())

fetchWeather.onFulfill.onCall(ctx => {
  const currentCity = ctx.get(cityAtom).trim()
  if (currentCity) {
    pastCitiesAtom(ctx, (prevCities = []) => {
      const withoutCurrent = prevCities.filter(city => city !== currentCity)
      const updated = [currentCity, ...withoutCurrent]
      return updated.slice(0, 3)
    })
  }
})

onConnect(fetchWeather.dataAtom, ctx => {
  const lastCity = ctx.get(cityAtom) || ctx.get(pastCitiesAtom)[0]
  if (lastCity) {
    cityAtom(ctx, lastCity)
    fetchWeather(ctx, lastCity)
  }
})
