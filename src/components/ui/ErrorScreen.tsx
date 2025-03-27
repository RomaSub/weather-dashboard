import lookingForCity from '../../assets/lookingForCity.svg'

export const ErrorScreen = ({ error }: { error: string }) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <img className='w-100 h-100' src={lookingForCity} />
      <h1 className='text-3xl font-bold text-red-600'>Error: {error}</h1>
    </div>
  )
}
