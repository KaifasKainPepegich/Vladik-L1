import Header from './components/Header/Header'
import TeachSection from './components/WayToTeach/TeachSection'
import ButtonSection from './components/Button/ButtonSection'
import IntroSection from './components/IntroSection/IntroSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachSection />
        <ButtonSection />
      </main>
    </>
  )
}
