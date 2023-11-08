
import './globals.css'


export const metadata = {
  title: 'Bloggers App',
  description: 'This website is for articles and blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black mb-40'>{children}</body>
    </html>
  )
}
