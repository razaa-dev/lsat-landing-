import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import {
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  Share1Icon,
  CopyIcon,
  BookmarkIcon,
  ChatBubbleIcon,
  PersonIcon,
  BarChartIcon,
  PlayIcon,
  LightningBoltIcon,
  TargetIcon,
} from '@radix-ui/react-icons'

const features = [
  // First row
  {
    Icon: TargetIcon,
    name: 'Real Testing Environment Experience',
    description:
      'Advanced testing environment that mirrors the official LSAT for unmatched authenticity with Advanced+ Features.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    Icon: BookmarkIcon,
    name: 'Complete Learning Hub',
    description:
      'Access course libraries and recorded bootcamps covering every LSAT topic.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    Icon: PlayIcon,
    name: 'Next-Level Explanations',
    description:
      'Text and video walkthroughs backed by the Explanation Challenge—ensuring true understanding.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  // Second row
  {
    Icon: ChatBubbleIcon,
    name: 'Direct Tutor Access',
    description:
      'Message tutors anytime and get tailored, thoughtful responses.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    Icon: CalendarIcon,
    name: 'Seamless Class Scheduling',
    description:
      'Join scheduled live sessions straight from your calendar with one click.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    Icon: PersonIcon,
    name: 'Personalized Support',
    description: 'Individualized help whenever you need it, on your terms.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  // Third row
  {
    Icon: FileTextIcon,
    name: 'Centralized Progress Tracking',
    description:
      'All your tests, notes, and attempts stored in one organized place.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    Icon: BarChartIcon,
    name: 'Smart Drilling, Insights & Reporting',
    description:
      'Targeted practice with detailed performance reporting to sharpen your skills faster.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    Icon: LightningBoltIcon,
    name: 'Quick Start Onboarding',
    description:
      'Kick off your journey with a Free 15-minute orientation call.',
    href: '/login',
    cta: 'Learn more',
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: 'lg:col-span-1 lg:row-span-1',
  },
]

export function BentoDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  )
}
