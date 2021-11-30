// Layout
import { BaseLayout } from '../layouts'

// Partials
import { Hero, Work, Reviews, LeaveRequest } from '../partials'

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Work />
      <Reviews />
      <LeaveRequest />
    </BaseLayout>
  )
}
