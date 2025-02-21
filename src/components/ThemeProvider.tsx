import { useAtom } from '@reatom/npm-react'
import { ConfigProvider, theme } from 'antd'
import { ReactNode } from 'react'
import { isDarkAtom } from '../features/model'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode] = useAtom(isDarkAtom)

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}>
      {children}
    </ConfigProvider>
  )
}
