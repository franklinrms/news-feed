import Link from 'next/link'
import { LifeBuoy, LogOut, Settings2, SunMoon, User } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ThemeOptions } from '@/components/theme/theme-toggle'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

const profile = {
  name: 'John Doe',
  email: 'johndoe@mail.com',
}

const isSignedIn = false

export function AccountMenu() {
  return (
    <>
      {!isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link href="/sign-in" className="hidden md:block">
            <div
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
              )}
            >
              Log in
            </div>
          </Link>
          <Link href="/sign-up">
            <div
              className={cn(
                buttonVariants({
                  variant: 'default',
                }),
              )}
            >
              Sign up
            </div>
          </Link>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarFallback className="select-none font-medium">
                {profile?.name?.charAt(0).toLocaleUpperCase() ?? '?'}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex flex-col">
              <span className="truncate font-semibold">{profile?.name}</span>
              <span className="truncate text-xs font-normal text-muted-foreground">
                {profile?.email}
              </span>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings2 className="mr-2 h-4 w-4" />
                <span>Preferences</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <SunMoon className="mr-2 h-4 w-4" />
                  <span>Appearance</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <ThemeOptions />
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>

            <DropdownMenuItem disabled>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              asChild
              // disabled={isSigningOut}
            >
              <Link href="/sign-out">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}
