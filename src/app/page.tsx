import { Grid } from '@/components/grid'
import { News } from '@/components/news'

import news from '../data.json'

export default function Home() {
  return (
    <main className="container min-h-screen w-full pb-80 pt-8">
      <Grid>
        {news.articles.map((item) => (
          <News key={item._id} data={item} />
        ))}
      </Grid>
    </main>
  )
}
