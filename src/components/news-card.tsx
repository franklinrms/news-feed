/* eslint-disable @next/next/no-img-element */

import { NewsData } from '@/types/news'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

interface NewsCardProps {
  showImage?: boolean
  showSummary?: boolean
  data: NewsData
}

export function NewsCard({ data, showImage, showSummary }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-title font-medium leading-tight">
          {data.title}
        </CardTitle>
        <CardDescription className="">{data.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {showImage && (
          <img
            src={data.media}
            alt=""
            className="w-full rounded-md object-cover grayscale"
          />
        )}
        {showSummary && (
          <p className="hyphens-auto text-justify text-base/tight dark:text-muted-foreground">
            {data.summary}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm font-light text-muted-foreground">
          {new Date(data.published_date).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}{' '}
          — {data.rights}
        </p>
      </CardFooter>
    </Card>
  )
}
