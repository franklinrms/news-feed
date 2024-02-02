import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import { Search } from '@/components/search'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Search />
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
