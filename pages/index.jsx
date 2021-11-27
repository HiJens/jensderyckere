// Layout
import { BaseLayout } from '../layouts'

// Partials
import { Hero, Work } from '../partials'

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Work />
    </BaseLayout>
  )
}
