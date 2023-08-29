'use client'

import { getRankFromLP } from '@/core/relations/resolver'
import clsx from 'clsx'

export interface RankProps {
  rating: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

export function RankIcon({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'w-8 h-8 bg-[url(/i/misc/rank_icon.svg)] bg-center bg-no-repeat bg-contain',
        className
      )}
    />
  )
}

export default function Rank({ rating, size = 'md' }: RankProps) {
  const rankData = getRankFromLP(rating)

  return <div 
    className={ clsx(
      'flex items-center bg-contain bg-center bg-no-repeat',
      {
        'w-6 h-6': size === 'xs',
        'w-8 h-8': size === 'sm',
        'w-12 h-12': size === 'md',
        'w-16 h-16': size === 'lg',
        'w-20 h-20': size === 'xl',
        'w-24 h-24': size === '2xl',
        'w-32 h-32': size === '3xl',
      }
    )}
    style={{
      backgroundImage: `url('${rankData.rankObject.image}')`,
    }}
  />
}