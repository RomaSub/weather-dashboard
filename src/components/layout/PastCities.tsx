import { useAction, useAtom } from '@reatom/npm-react'
import { pastCitiesAtom, selectPastCity } from '../../features/model'

export const PastCities = () => {
  const [pastCities] = useAtom(pastCitiesAtom)
  const select = useAction(selectPastCity)

  return (
    <div className='flex justify-between gap-3'>
      {pastCities.map((city, ind) => (
        <button
          key={ind}
          onClick={() => select(city)}
          className='cursor-pointer px-3 py-2 text-xs font-medium text-center text-w3 dark:text-b3 bg-w2 rounded-lg dark:bg-b2'>
          {city}
        </button>
      ))}
    </div>
  )
}
