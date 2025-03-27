import lookingForCity from '../../assets/lookingForCity.svg'

export const StartScreen = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <img className='w-100 h-100' src={lookingForCity} />
      <h1 className='text-3xl font-bold text-w3 dark:text-b3'>Enter a City</h1>
    </div>
  )
}
