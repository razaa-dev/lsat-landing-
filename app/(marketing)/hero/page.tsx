'use client'
import { BentoDemo } from '@/components/bento-features'
import { Icons } from '@/components/icons'
import BlurIn from '@/components/magicui/blur-in'
import { BorderBeam } from '@/components/magicui/border-beam'
import ShineBorder from '@/components/magicui/shine-border'
import { Companies } from '@/components/social-proof'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from '@/node_modules/next/link'
import React, { useState } from 'react'
import FAQSection from '@/components/FAQSection'
import PricingSection from '@/components/PricingSection'

// YouTube Video Component
const YouTubeVideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoId = 'BHACKCNDMW8'

  return (
    <>
      {/* Video Section */}
      <section className="container py-8 md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-8">
          <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">
            WATCH OUR STORY
          </h3>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl">
            See How We Transform LSAT Scores
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-background shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]"
            onClick={() => setIsModalOpen(true)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-full">
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="LSAT Success Story"
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/10" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                  <svg
                    className="ml-1 h-8 w-8 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 rounded bg-black/80 px-2 py-1 text-sm text-white">
                Watch Now
              </div>
            </div>

            <BorderBeam size={200} duration={8} />
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 md:p-8">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-8 -right-2 z-10 rounded-full bg-white p-2 text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="LSAT Success Story"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function HeroPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center sm:mb-10 lg:mb-20 md:sm-20">
          <ShineBorder
            className="text-center capitalize bg-muted px-4 py-1.5 text-lg font-medium absolute"
            color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          >
            +12 Points Money Back Guarantee✨
          </ShineBorder>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-20">
            150 is Guaranteed, 160 is easy &170 only needs some time
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Unleash all your LSAT potential and claim your point now.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: 'lg' }))}>
              Join us Now
            </Link>
            <a
              href="/#features"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'mt-sm-2'
              )}
            >
              Let&apos;s Explore 👇🏻
            </a>
          </div>
        </div>
        <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden md:overflow-auto lg:overflow-auto">
          <img
            src="/darkoutput.png"
            alt="Hero Image"
            className="hidden lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:block overflow-hidden md:overflow-auto lg:overflow-auto"
          />
          <img
            src="/lightoutput.png"
            alt="Hero Image"
            className="block lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:hidden overflow-hidden md:overflow-auto lg:overflow-auto"
          />

          <BorderBeam size={250} />
        </div>
      </section>

      {/* YouTube Video Section - Added here */}
      <YouTubeVideoSection />

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">
            FEATURES
          </h3>
        </div>
        <BentoDemo />
      </section>

      <PricingSection />

      <FAQSection />
    </>
  )
}

export default HeroPage
