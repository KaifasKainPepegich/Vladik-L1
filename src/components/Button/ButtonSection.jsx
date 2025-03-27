import { differences } from '../../data'
import { useState } from 'react'
import Button from './Button'

export default function ButtonSection() {
  const [contentType, setContentType] = useState(null)
  return (
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
  )
}
