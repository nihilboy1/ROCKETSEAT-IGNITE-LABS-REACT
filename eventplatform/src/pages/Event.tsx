import { Header } from '../components/Header'
import { MainContent } from '../components/MainContent'
import { Sidebar } from '../components/Sidebar'

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <MainContent />
        <Sidebar />
      </main>
    </div>
  )
}
