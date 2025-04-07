import { Header } from './components/Header/Header'
import { TeachSection } from './components/WayToTeach/TeachSection'
import { ButtonSection } from './components/Button/ButtonSection'
import { IntroSection } from './components/IntroSection/IntroSection'
import { TabsSection } from './components/TabsSection/TabsSection'
import { useState } from 'react'
import { FeedbackSection } from './components/FeedbackSection/FeedbackSection'
import { EffectSection } from './components/EffectSection/EffectSection'

export const App = () => {
  const [tab, setTab] = useState('feedback')

  const renderTabContent = (tab) => {
    switch (tab) {
      case 'main':
        return (
          <>
            <TeachSection />
            <ButtonSection />
          </>
        )
      case 'feedback':
        return <FeedbackSection />
      case 'effect':
        return <EffectSection />
      default:
        return <div>Ошибочка,выходим из машины</div>
    }
  }

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {renderTabContent(tab)}
      </main>
    </>
  )
}
