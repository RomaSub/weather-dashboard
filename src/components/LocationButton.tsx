import { Locate } from 'lucide-react'

export const LocationButton = () => {
  return (
    <div className='font-bold flex items-center gap-2 px-4 py-2 bg-[#4CBB17] text-white rounded-full'>
      <Locate className='w-5 h-5' />
      Current Location
    </div>
  )
}
