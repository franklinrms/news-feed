import { NewsCard } from '@/components/news-card'
import { Container } from '@/components/container'
import { Grid } from '@/components/grid'

import news from '../data.json'

export default function Home() {
  return (
    <main className="container min-h-screen w-full pb-80 pt-36">
      <Grid>
        {news.articles.map((item) => (
          <Container key={item._id} className="break-inside-avoid">
            <NewsCard
              data={item}
              showImage={Math.random() > 0.5}
              showSummary={Math.random() > 0.5}
            />
          </Container>
        ))}
      </Grid>
    </main>
  )
}
