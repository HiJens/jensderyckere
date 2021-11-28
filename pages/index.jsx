// Layout
import { BaseLayout } from '../layouts'

// Partials
import { Hero, Work, Reviews } from '../partials'

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Work />
      <Reviews />
    </BaseLayout>
  )
}
