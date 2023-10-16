import { ReactNode } from 'react'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 pb-4">
      <Header />
      <div>{children}</div>
    </div>
  )
}
