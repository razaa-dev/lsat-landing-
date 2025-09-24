'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const [email, setEmail] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const { theme } = useTheme()

  const isFormFilled = email.trim() !== '' && firstName.trim() !== ''

  return (
    <footer className={cn('bg-background border-t', className)}>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 mb-6 lg:items-start">
          {/* Left Section - Navigation */}
          <div className="space-y-6 lg:justify-self-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-3">
                  LSAT Goats
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/plans"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Plans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tutoring"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Tutoring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-lg mb-3">
                  Tools
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/scholarship-estimator"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Scholarship Estimator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/score-converter"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Score Converter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/school-rankings"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      School Rankings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dashboard Button */}
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              Go to Dashboard
            </Link>
          </div>

          {/* Center Section - Logo */}
          <div className="flex items-center justify-center order-first lg:order-none min-h-[200px] lg:min-h-0 lg:mx-16">
            <Image
              src={theme === 'light' ? '/light-theme.png' : '/logo.png'}
              alt="LSAT Demon Logo"
              width={160}
              height={160}
              className="h-32 w-32 sm:h-36 sm:w-36 lg:h-40 lg:w-40 object-contain"
            />
          </div>

          {/* Right Section - Newsletter */}
          <div className="space-y-4 lg:justify-self-end">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              LSAT Lessons
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Get LSAT strategies in your inbox.
            </p>

            <div className="space-y-3">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-ring"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-ring"
              />
              <Button
                className={cn(
                  'w-full font-medium transition-colors',
                  isFormFilled
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                )}
                disabled={!isFormFilled}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
        <div className="border-t border-border pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <span>© 2025 LSAT Goats, LLC</span>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors underline"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* TikTok */}
            <Link href="#" className="group">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="h-4 w-4 text-white group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
            </Link>

            {/* Instagram */}
            <Link href="#" className="group">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="h-4 w-4 text-white group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </div>
            </Link>

            {/* YouTube */}
            <Link href="#" className="group">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="h-4 w-4 text-white group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </Link>

            {/* Facebook */}
            <Link href="#" className="group">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="h-4 w-4 text-white group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </Link>

            {/* X/Twitter */}
            <Link href="#" className="group">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center group-hover:bg-white transition-colors">
                <svg
                  className="h-4 w-4 text-white group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
