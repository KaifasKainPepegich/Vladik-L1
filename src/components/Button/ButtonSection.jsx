import { differences } from '../../data'
import { useState } from 'react'
import { Button } from './Button'

export const ButtonSection = () => {
  const [contentType, setContentType] = useState(null)

  const buttonArr = [
    { key: 'way', label: 'Подход' },
    { key: 'easy', label: 'Доступность' },
    { key: 'program', label: 'Концентрация' },
  ]

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>

      {buttonArr.map(({ key, label }) => (
        <Button key={key} isActive={contentType === key} onClick={() => setContentType(key)}>
          {label}
        </Button>
      ))}

      {contentType ? <p>{differences[contentType]}</p> : <p>нажми на кнопку</p>}

      <p>{differences[contentType]}</p>
    </section>
  )
}
