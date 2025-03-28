import { Header } from './components/Header/Header'
import { TeachSection } from './components/WayToTeach/TeachSection'
import { ButtonSection } from './components/Button/ButtonSection'
import { IntroSection } from './components/IntroSection/IntroSection'
import { TabsSection } from './components/TabsSection/TabsSection'
import { useState } from 'react'
import { FeedbackSection } from './components/FeedbackSection/FeedbackSection'

export const App = () => {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachSection />
            <ButtonSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}
      </main>
    </>
  )
}
