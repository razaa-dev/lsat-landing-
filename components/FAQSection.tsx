'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react'

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ')

interface FAQItemProps {
  question: string
  answer: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  index: number
}

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: FAQItemProps) => {
  return (
    <div className="group relative">
      <div
        className={cn(
          'relative overflow-hidden rounded-xl border transition-all duration-300 ease-out',
          'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm',
          'border-gray-200/50 dark:border-gray-700/50',
          'hover:border-gray-300/70 dark:hover:border-gray-600/70',
          'hover:shadow-lg hover:shadow-gray-100/20 dark:hover:shadow-gray-900/20',
          isOpen &&
            'border-blue-200 dark:border-blue-800/50 shadow-lg shadow-blue-100/10 dark:shadow-blue-900/10'
        )}
      >
        {/* Gradient overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300',
            'group-hover:opacity-100'
          )}
        />

        <button
          className="relative flex w-full items-start justify-between p-4 sm:p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-xl"
          onClick={onToggle}
        >
          <div className="flex items-start space-x-3 sm:space-x-4 flex-1 min-w-0">
            <div
              className={cn(
                'flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300',
                'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg',
                isOpen && 'scale-110 shadow-blue-500/25'
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white leading-tight sm:leading-relaxed break-words">
              {question}
            </span>
          </div>

          <div
            className={cn(
              'flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ml-2 sm:ml-4',
              'bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700',
              isOpen && 'bg-blue-100 dark:bg-blue-900/30 rotate-180'
            )}
          >
            {isOpen ? (
              <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
            ) : (
              <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400" />
            )}
          </div>
        </button>

        <div
          className={cn(
            'overflow-hidden transition-all duration-500 ease-out',
            isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10">
            <div className="ml-9 sm:ml-12 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      question: 'Why are we the best LSAT tutoring company?',
      answer: (
        <p>
          At LSAT GOATs, our mission is simple: to give every student access to
          the best, most innovative LSAT preparation tools and tutoring on the
          market. We combine expert instruction with state-of-the-art testing
          technology to help you master the exam with confidence. What sets us
          apart is not only our results-driven approach, but also the unique
          resources and learning systems we have developed - resources you will
          not find anywhere else.
        </p>
      ),
    },
    {
      question: 'Why is LSAT GOATs the right choice for me?',
      answer: (
        <p>
          We are not just another prep company - we are a movement. We reinvest
          50% of our revenue directly into research and development, building
          smarter tools, adaptive learning platforms, and AI-powered
          explanations that continuously evolve. By choosing LSAT GOATs, you are
          investing in yourself, your future, and the future of the EduTech
          industry. We are here to be a force for good in the market, committed
          to raising the bar for what LSAT prep should look like.
        </p>
      ),
    },
    {
      question: 'What is the Best Explanation Challenge?',
      answer: (
        <p>
          We stand behind the quality of our explanations - clear, insightful,
          and easy to follow. If you believe another company provides better
          explanations, prove us wrong, and we will give you a full refund - no
          questions asked. That is how confident we are in our approach.
        </p>
      ),
    },
    {
      question:
        'What is the difference between Starter (Free) and Advanced+ Plans?',
      answer: (
        <div className="space-y-4 sm:space-y-6">
          {/* Starter Plan */}
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0 p-4 sm:p-6 rounded-lg bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200/30 dark:border-blue-800/30">
            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
            <div className="min-w-0 flex-1">
              <strong className="text-blue-900 dark:text-blue-300 text-lg sm:text-xl block mb-2">
                Starter Plan (Free)
              </strong>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Free and limited self-paced access to practice questions,
                drills, and some of our AI-powered explanations - perfect for
                exploring our platform before committing.
              </p>
            </div>
          </div>

          {/* Advanced Plan */}
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0 p-4 sm:p-6 rounded-lg bg-purple-50/50 dark:bg-purple-900/10 border border-purple-200/30 dark:border-purple-800/30">
            <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
            <div className="min-w-0 flex-1">
              <strong className="text-purple-900 dark:text-purple-300 text-lg sm:text-xl block mb-2">
                Advanced Plan
              </strong>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Advanced analytics, personalized study plans, access to recorded
                masterclasses and real-time feedback from LSAT experts. Perfect
                for students who want structured guidance and direct support.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      question: 'How does the service or money-back guarantee work?',
      answer: (
        <div className="space-y-4">
          <p>
            We believe in results and stand by our product. If you are not
            satisfied with your experience within the first 14 days, or if our
            explanations do not meet the Best Explanation Challenge, you are
            eligible for a 100% refund.
          </p>
          <div className="p-4 sm:p-6 rounded-lg bg-green-50/50 dark:bg-green-900/10 border border-green-200/30 dark:border-green-800/30">
            <p className="text-green-800 dark:text-green-300 font-medium text-sm sm:text-base md:text-lg">
              ✅ No fine print. No questions asked.
            </p>
          </div>
        </div>
      ),
    },
    {
      question: 'How can I upgrade my plan?',
      answer: (
        <div className="space-y-4">
          <p>
            Upgrading is simple. Just log into your dashboard, go to Account
            Settings - Subscription, and select the plan you would like to
            switch to.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 rounded-lg bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/30 dark:border-gray-700/30">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed flex-1">
              Your new plan will activate immediately, and you will only pay the
              difference in cost.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section
      id="faq"
      className="relative py-8 md:pb-12 lg:pb-24 overflow-hidden"
    >
      <div className="container relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 sm:gap-6 text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
            <span className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent px-2">
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 px-2">
            Everything you need to know about LSAT GOATs and our services.
            Cannot find what you are looking for?{' '}
            <a
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline underline-offset-2"
            >
              Get in touch
            </a>
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
