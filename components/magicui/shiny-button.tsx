'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: 'default' | 'outline'
  className?: string
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ text, variant = 'default', className, ...props }, ref) => {
    return (
      <>
        <style jsx>{`
          .shiny-button {
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

          .shiny-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 255, 255, 0.3);
          }

          .shiny-button::before {
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

          .shiny-button .button-text {
            position: relative;
            z-index: 2;
            color: white;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          }

          .shiny-button-outline {
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

          .shiny-button-outline:hover {
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

          .shiny-button-outline::before {
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

          .shiny-button-outline .button-text {
            position: relative;
            z-index: 2;
            font-weight: 600;
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
        `}</style>

        <button
          ref={ref}
          className={cn(
            variant === 'outline' ? 'shiny-button-outline' : 'shiny-button',
            'w-full px-8 py-3 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
            className
          )}
          {...props}
        >
          <span className="button-text">{text}</span>
        </button>
      </>
    )
  }
)

ShinyButton.displayName = 'ShinyButton'

export default ShinyButton
