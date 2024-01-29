/* eslint-disable @next/next/no-img-element */
// import { cn } from '@/lib/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'

interface NewsCardProps {
  showImage?: boolean
  showSummary?: boolean
  data: {
    title: string
    excerpt: string
    summary: string
    rights: string
    media: string
    published_date: string
    link: string
    _id: string
    topic: string

    country: string
    language: string
  }
}

export function NewsCard({ data, showImage, showSummary }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-title font-bold leading-tight">
          {data.title}
        </CardTitle>
        <CardDescription className="tracking-tighter">
          {data.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {showImage && (
          <img
            // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
            src={data.media}
            alt=""
            className="w-full rounded-md object-cover grayscale"
          />
        )}
        {showSummary && (
          <p className="hyphens-auto text-justify text-base/tight tracking-tight">
            {data.summary}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
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
