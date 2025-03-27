import { Header } from './components/layout/Header'
import { MainContent } from './components/weather/MainContent'

export const App = () => {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 bg-primary bg-w1 dark:bg-b1'>
      <Header />
      <MainContent />
    </div>
  )
}
