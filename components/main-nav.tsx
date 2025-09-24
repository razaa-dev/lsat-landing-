'use client'
import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Features',
    href: '/#features',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
]

export function MainNav() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Use resolvedTheme which handles 'system' theme properly
  const currentTheme = mounted ? resolvedTheme || theme : 'dark'

  return (
    <div className="mr-4 md:flex md:items-center">
      <Link href="/" className="lg:mr-6 sm:mr-0 flex items-center gap-2">
        <Image
          src={currentTheme === 'light' ? '/light-theme.png' : '/logo.png'}
          alt="LSAT GOATs Logo"
          width={120}
          height={120}
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 hidden lg:block md:block object-contain"
        />
      </Link>
      <NavigationMenu className="hidden lg:flex lg:items-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Tutoring
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px]">
                <li className="row">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src={
                          currentTheme === 'light'
                            ? '/light-theme.png'
                            : '/logo.png'
                        }
                        alt="LSAT GOATs Logo"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        LSAT GOATs
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Master the LSAT with expert tutoring and innovative prep
                        tools
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#features" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Features
              </NavigationMenuLink>
            </Link>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Plans
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
