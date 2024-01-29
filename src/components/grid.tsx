import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Grid({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3',
        className,
      )}
      {...props}
    />
  )
}
