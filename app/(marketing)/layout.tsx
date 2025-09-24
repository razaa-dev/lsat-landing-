import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MainNav } from '@/components/main-nav'
import MobileNav from '@/components/mobile-nav'
import { ModeToggle } from '@/components/toggle'
import { SiteFooter } from '@/components/site-footer'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LSAT Goats - Master the LSAT with Ease',
  description:
    'Practice smarter with tailored LSAT prep, study tools, and insights designed to help you ace the exam.',
}

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Safe auth check with comprehensive error handling
  let user = null
  let authError = false

  try {
    // Only attempt auth if environment variables exist
    if (process.env.NEXTAUTH_SECRET && process.env.NEXTAUTH_URL) {
      user = await getCurrentUser()
    }
  } catch (error) {
    console.error('Auth error in marketing layout:', error)
    authError = true
    // Continue rendering instead of crashing
  }

  // Only redirect if we successfully got a user (no auth errors)
  if (user && !authError) {
    try {
      redirect('/dashboard')
    } catch (redirectError) {
      console.error('Redirect error:', redirectError)
      // If redirect fails, continue rendering
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="h-16 container sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between py-6 w-full">
            {/* Wrap components in error boundaries */}
            <ErrorBoundary fallback={<div>Menu</div>}>
              <MobileNav />
            </ErrorBoundary>

            <ErrorBoundary fallback={<div className="font-bold">QuoteAI</div>}>
              <MainNav />
            </ErrorBoundary>

            <nav>
              <div className="md:flex">
                <div className="flex gap-4 items-center">
                  <ErrorBoundary fallback={<div></div>}>
                    <ModeToggle />
                  </ErrorBoundary>

                  <Link
                    href="/signup"
                    className={cn(
                      buttonVariants({ variant: 'default', size: 'sm' }),
                      'px-4'
                    )}
                  >
                    Start for Free
                  </Link>
                  <Link
                    href="/login"
                    className={cn(
                      buttonVariants({ variant: 'default', size: 'sm' }),
                      'px-4'
                    )}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>

      <ErrorBoundary fallback={<SimpleFooter />}>
        <SiteFooter />
      </ErrorBoundary>
    </>
  )
}

// Simple Error Boundary Component
function ErrorBoundary({
  children,
  fallback,
}: {
  children: React.ReactNode
  fallback: React.ReactNode
}) {
  try {
    return <>{children}</>
  } catch (error) {
    console.error('Component error:', error)
    return <>{fallback}</>
  }
}

// Fallback footer if SiteFooter fails
function SimpleFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="font-bold">QuoteAI</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          © 2025 LSAT Goats. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
