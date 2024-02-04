import { NewsCard } from '@/components/news-card'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

import { NewsData } from '@/types/news'
import { ArrowLeft } from 'lucide-react'

export function News({ data }: { data: NewsData }) {
  return (
    <Drawer>
      <DrawerTrigger
        className="cursor-zoom-in break-inside-avoid [&>div]:w-full"
        asChild
      >
        <NewsCard
          data={data}
          showImage={Math.random() > 0.5}
          showSummary={Math.random() > 0.5}
        />
      </DrawerTrigger>

      <DrawerContent className="outline-none">
        <div className="mx-auto w-full pt-4">
          <DrawerHeader className="flex items-center justify-center">
            <div className="flex w-full items-center gap-2">
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="text-muted-foreground" />
                </Button>
              </DrawerClose>

              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="w-full truncate rounded-md bg-muted px-4 py-2 text-center text-sm"
              >
                {data.link}
              </a>
            </div>
          </DrawerHeader>

          <iframe
            className="h-[80dvh] w-full rounded-lg px-4"
            src={data.link}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
