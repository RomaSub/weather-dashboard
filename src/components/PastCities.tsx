import { useAction, useAtom } from '@reatom/npm-react'
import { pastCitiesAtom, selectPastCity } from '../features/model'

export const PastCities = () => {
  const [pastCities] = useAtom(pastCitiesAtom)
  const select = useAction(selectPastCity)

  return (
    <div className='flex justify-between gap-3'>
      {pastCities.map((city, ind) => (
        <button
          key={ind}
          onClick={() => select(city)}
          className='cursor-pointer px-3 py-2 text-xs font-medium text-center text-[#292929] dark:text-[#FFFFFF] bg-[#D9D9D9] rounded-lg dark:bg-[#444444]'>
          {city}
        </button>
      ))}
    </div>
  )
}
