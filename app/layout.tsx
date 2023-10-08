import Header from './components/header'
import './globals.css'

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
        <Header />
        <hr />
        <div className='wrapper'>
          {children}          
        </div>
      </body>
    </html>
  )
}
