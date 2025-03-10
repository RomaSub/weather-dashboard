import { Header } from './components/Header'
import { MainContent } from './components/MainContent'

export const App = () => {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 bg-[#FFFFFF] dark:bg-[#333333]'>
      <Header />
      <MainContent />
    </div>
  )
}
