'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ShinyButton from '@/components/magicui/shiny-button'

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  const handleCheckout = async (plan: string) => {
    // Call your API endpoint to create a checkout session
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan }),
    })

    const { url } = await res.json()

    // Redirect to Stripe Checkout
    if (url) {
      window.location.href = url
    } else {
      console.error('Failed to start the checkout process.')
    }
  }

  return (
    <>
      <style jsx>{`
        .crystal-button {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(30, 30, 30, 0.9) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2);
        }

        .crystal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .crystal-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.6),
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shine 3s infinite;
          z-index: 1;
        }

        .crystal-button .button-text {
          position: relative;
          z-index: 2;
          color: white;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }

        .crystal-button-outline {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            rgba(255, 255, 255, 0.1) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1);
        }

        .crystal-button-outline:hover {
          transform: translateY(-2px);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.15) 100%
          );
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            inset 0 -1px 0 rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .crystal-button-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shine 3s infinite;
          z-index: 1;
        }

        .crystal-button-outline .button-text {
          position: relative;
          z-index: 2;
          font-weight: 600;
        }
      `}</style>

      <section className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
        <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-center">
            Get the most value for what you pay
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-center mx-auto">
            The smartest LSAT prep. The clearest explanations.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 border">
            <div className="flex">
              <button
                onClick={() => setIsMonthly(true)}
                className={cn(
                  'px-3 py-2 sm:px-6 sm:py-3 rounded-md transition-all duration-200 font-medium text-xs sm:text-sm',
                  isMonthly
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Monthly billing
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={cn(
                  'px-3 py-2 sm:px-6 sm:py-3 rounded-md transition-all duration-200 font-medium text-xs sm:text-sm relative',
                  !isMonthly
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Trimester billing
                {!isMonthly && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-xs px-2 py-1 rounded-full text-white font-bold animate-pulse">
                    30% OFF
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch w-full">
          {/* Starter Plan */}
          <div className="rounded-lg border bg-card p-6 sm:p-8 text-card-foreground shadow-sm flex flex-col">
            <div className="text-center mb-6 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-6">
                {isMonthly ? (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/mo</span>
                  </>
                ) : (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/trimester</span>
                  </>
                )}
              </div>
              <div className="w-full">
                <ShinyButton text="Start for free" variant="outline" />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 flex-grow">
              <h4 className="font-semibold text-muted-foreground mb-4">
                What&apos;s included:
              </h4>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  2 (Tests 73 & June 2007)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  20 Text explanations + 20 Video explanations
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Powerful Drill & Review features
                </span>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  No Ask button
                </span>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  No Study plan
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">1 Class recording</span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Live Free online classes + 1 Live online class
                </span>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  No Introductory 15 mins Call
                </span>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  No Admissions
                </span>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  No Higher score Guarantee
                </span>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  No Weekly private tutoring
                </span>
              </div>

              <div className="flex items-start gap-3">
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  No Money back Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Advanced+ Plan */}
          <div className="rounded-lg border bg-card p-6 sm:p-8 text-card-foreground shadow-sm relative overflow-hidden flex flex-col">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
              Limited-time offer
            </div>

            <div className="text-center mb-6 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Advanced+</h3>
              <div className="mb-6">
                {isMonthly ? (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold">$65</span>
                    <span className="text-muted-foreground">/month</span>
                  </>
                ) : (
                  <div className="space-y-1">
                    <div className="text-muted-foreground line-through text-base sm:text-lg">
                      $195
                    </div>
                    <div>
                      <span className="text-3xl sm:text-4xl font-bold">
                        $135
                      </span>
                      <span className="text-muted-foreground">/trimester</span>
                    </div>
                    <div className="text-green-600 text-xs sm:text-sm font-semibold">
                      Save $60 (30% off)
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full">
                <ShinyButton
                  text="Subscribe"
                  onClick={() => handleCheckout('advanced')}
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 flex-grow">
              <h4 className="font-semibold text-muted-foreground mb-4">
                What&apos;s included:
              </h4>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  All official LSAT tests + 6000 Questions
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Text explanations + Unlimited Video explanations. The best
                  explanations in the market. Prove us wrong and you&apos;ll get
                  a full refund!
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Super-advanced: By Type, Subtype, Difficulty, Tag... - Time
                  tracking. Projected LSAT score. State of the Art AI Adaptive
                  Drilling algorithm that tracks your weaknesses and feeds
                  questions automatically.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Hit the Ask button. A tutor will respond within 24 hours.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Yes - Study plan included
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Watch our entire library of recorded classes. All live class
                  videos are posted within 24 hours + full Self Paced course
                  with its own homework and drilling sets (Digital and PDF)
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Live Free online classes + 1 Live online class
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Yes - Introductory 15 mins session
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Admissions Bootcamp Course with case studies
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Yes - Higher score guarantee
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Introductory 15 mins session
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  14 days Satisfaction guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7 text-center mx-auto text-xs sm:text-base">
            Start your LSAT journey today.{' '}
            <strong>You can test the upgrade and won&apos;t be charged.</strong>
          </p>
        </div>
      </section>
    </>
  )
}

export default PricingSection
