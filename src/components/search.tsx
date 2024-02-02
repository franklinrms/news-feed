import { redirect } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Search as SearchIcon } from 'lucide-react'

export function Search() {
  const handleSearch = async (formData: FormData) => {
    'use server'
    const search = formData.get('search') as string
    redirect(`/search?q=${search}`)
  }
  return (
    <form
      action={handleSearch}
      className="relative flex max-w-2xl items-center text-muted-foreground focus-within:text-foreground"
    >
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-current" />
      <Input
        name="search"
        type="search"
        placeholder="Search..."
        className="pl-9 md:w-[100px] lg:w-full"
      />
    </form>
  )
}
