'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from '@/node_modules/next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import React from 'react'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Use resolvedTheme which handles 'system' theme properly
  const currentTheme = mounted ? resolvedTheme || theme : 'dark'

  return (
    <MobileLink
      href="/"
      className="flex items-center lg:hidden sm:block md:hidden"
      onOpenChange={setOpen}
    >
      <Image
        src={currentTheme === 'light' ? '/light-theme.png' : '/logo.png'}
        alt="LSAT GOATs Logo"
        width={80}
        height={80}
        className="mr-2 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
      />
    </MobileLink>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

export default MobileNav
