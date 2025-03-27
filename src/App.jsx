import Header from './components/Header'
import { ways, differences } from './data'
import WayToTeach from './components/WayToTeach/WayToTeach'
import { useState } from 'react'
import Button from './components/Button/Button'

export default function App() {
  const [contentType, setContentType] = useState(null)

  return (
    <>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button isActive={contentType === 'way'} onClick={() => setContentType('way')}>
            Подход
          </Button>
          <Button isActive={contentType === 'easy'} onClick={() => setContentType('easy')}>
            Доступность
          </Button>
          <Button isActive={contentType === 'program'} onClick={() => setContentType('program')}>
            Концентрация
          </Button>

          {!contentType && <p>нажми на кнопку</p>}

          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </>
  )
}
