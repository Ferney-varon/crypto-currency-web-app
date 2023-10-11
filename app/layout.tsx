import Header from './components/header'
import './globals.css'
import { ReduxProvider } from './redux/provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Crypto Currency App</title>
      </head>
      <body>
        <ReduxProvider>
          <Header />
          <div className='wrapper'>
            {children}          
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
