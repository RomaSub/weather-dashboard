export const Skeleton = () => {
  return (
    <>
      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6'>
        <div className='w-full md:w-[40%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] p-4 sm:p-6 md:p-8 shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center animate-pulse'>
          <div className='h-8 sm:h-10 md:h-12 bg-gray-200 dark:bg-zinc-700 rounded-full w-32 sm:w-40 md:w-48 mb-2 sm:mb-4'></div>
          <div className='h-14 sm:h-16 md:h-20 bg-gray-200 dark:bg-zinc-700 rounded-full w-40 sm:w-52 md:w-64 mb-2 sm:mb-4'></div>
          <div className='h-4 sm:h-5 md:h-6 bg-gray-200 dark:bg-zinc-700 rounded-full w-24 sm:w-28 md:w-32'></div>
        </div>

        <div className='w-full md:w-[60%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)] animate-pulse'>
          <div className='p-4 sm:p-6 flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6'>
            <div className='flex flex-col justify-between md:w-1/3'>
              <div>
                <div className='h-10 sm:h-12 md:h-14 bg-gray-200 dark:bg-zinc-700 rounded-full w-24 sm:w-28 md:w-32 mx-auto md:mx-0 mb-2'></div>
                <div className='flex items-center justify-center md:justify-start mt-2'>
                  <div className='h-4 sm:h-5 bg-gray-200 dark:bg-zinc-700 rounded-full w-16 sm:w-20 mr-2'></div>
                  <div className='h-5 sm:h-6 md:h-7 bg-gray-200 dark:bg-zinc-700 rounded-full w-12 sm:w-14 md:w-16'></div>
                </div>
              </div>

              <div className='space-y-3 sm:space-y-4 mt-4 sm:mt-6 flex flex-row md:flex-col justify-center md:justify-start gap-4 md:gap-0'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-zinc-700 rounded-full'></div>
                  <div className='ml-2 sm:ml-4'>
                    <div className='h-4 sm:h-5 bg-gray-200 dark:bg-zinc-700 rounded-full w-16 sm:w-20 mb-1 sm:mb-2'></div>
                    <div className='h-3 sm:h-4 bg-gray-200 dark:bg-zinc-700 rounded-full w-12 sm:w-16'></div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-zinc-700 rounded-full'></div>
                  <div className='ml-2 sm:ml-4'>
                    <div className='h-4 sm:h-5 bg-gray-200 dark:bg-zinc-700 rounded-full w-16 sm:w-20 mb-1 sm:mb-2'></div>
                    <div className='h-3 sm:h-4 bg-gray-200 dark:bg-zinc-700 rounded-full w-12 sm:w-16'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center md:w-1/3 my-2 md:my-0'>
              <div className='w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gray-200 dark:bg-zinc-700 rounded-full'></div>
              <div className='h-6 sm:h-7 md:h-8 bg-gray-200 dark:bg-zinc-700 rounded-full w-24 sm:w-28 md:w-32 mt-4 sm:mt-6 md:mt-10'></div>
            </div>

            <div className='grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 md:w-1/3'>
              {[1, 2, 3, 4].map(item => (
                <div key={item} className='flex flex-col items-center'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-200 dark:bg-zinc-700 rounded-full'></div>
                  <div className='mt-1 sm:mt-2 text-center'>
                    <div className='h-5 sm:h-6 bg-gray-200 dark:bg-zinc-700 rounded-full w-12 sm:w-14 md:w-16 mx-auto mb-1'></div>
                    <div className='h-4 sm:h-5 bg-gray-200 dark:bg-zinc-700 rounded-full w-14 sm:w-16 md:w-20 mx-auto'></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row justify-between items-stretch gap-4 sm:gap-6 mt-4 sm:mt-6'>
        <div className='w-full md:w-[35%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)] p-4 sm:p-5 animate-pulse'>
          <div className='h-6 sm:h-7 md:h-8 bg-gray-200 dark:bg-zinc-700 rounded-full w-48 sm:w-56 md:w-64 mx-auto mb-3 sm:mb-4'></div>
          <div className='space-y-2 sm:space-y-3'>
            {[1, 2, 3, 4, 5].map(item => (
              <div key={item} className='grid grid-cols-3 items-center'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 dark:bg-zinc-700 rounded-full ml-2 sm:ml-5'></div>
                <div className='h-5 sm:h-6 md:h-7 bg-gray-200 dark:bg-zinc-700 rounded-full w-12 sm:w-14 md:w-16 ml-1 sm:ml-3'></div>
                <div className='h-4 sm:h-5 md:h-6 bg-gray-200 dark:bg-zinc-700 rounded-full w-16 sm:w-18 md:w-20'></div>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full md:w-[65%] bg-[#D9D9D9] dark:bg-[#444444] rounded-2xl sm:rounded-[30px] shadow-md sm:shadow-[10px_10px_4px_rgba(0,0,0,0.5)] pt-4 sm:pt-5 animate-pulse'>
          <div className='h-6 sm:h-7 md:h-8 bg-gray-200 dark:bg-zinc-700 rounded-full w-48 sm:w-56 md:w-64 mx-auto mb-3 sm:mb-4'></div>
          <div className='flex justify-start md:justify-center gap-3 sm:gap-4 overflow-x-auto pb-4 px-4'>
            {[1, 2, 3, 4, 5].map(item => (
              <div
                key={item}
                className='relative flex-shrink-0 w-[100px] sm:w-[130px] h-[200px] sm:h-[250px] rounded-3xl sm:rounded-[40px] bg-gray-300 dark:bg-zinc-600 flex flex-col items-center py-3 sm:py-4'>
                <div className='h-5 sm:h-6 md:h-7 bg-gray-200 dark:bg-zinc-700 rounded-full w-12 sm:w-16 mb-3 sm:mb-4'></div>
                <div className='flex flex-col items-center justify-between h-full pb-3 sm:pb-4'>
                  <div className='flex flex-col items-center mb-2 sm:mb-3'>
                    <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 dark:bg-zinc-700 rounded-full mb-1 sm:mb-2'></div>
                    <div className='h-4 sm:h-5 md:h-6 bg-gray-200 dark:bg-zinc-700 rounded-full w-10 sm:w-12 mt-1 sm:mt-2'></div>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='w-10 h-10 sm:w-14 sm:h-14 bg-gray-200 dark:bg-zinc-700 rounded-full'></div>
                    <div className='h-4 sm:h-5 md:h-6 bg-gray-200 dark:bg-zinc-700 rounded-full w-12 sm:w-16 mt-1 sm:mt-2'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
