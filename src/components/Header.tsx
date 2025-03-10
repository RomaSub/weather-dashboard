import { LocationButton } from './LocationButton'
import { PastCities } from './PastCities'
import { SearchBar } from './SearchBar'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 md:mb-8'>
      <div className='flex items-center justify-between w-full sm:w-auto gap-4'>
        <ThemeSwitcher />
        <div className='block sm:hidden'>
          <LocationButton />
        </div>
      </div>
      <SearchBar />
      <PastCities />
      <div className='hidden sm:block'>
        <LocationButton />
      </div>
    </div>
  )
}
