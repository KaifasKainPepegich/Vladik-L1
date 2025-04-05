import style from './FeedbackSection.module.scss'
import { Button } from './../Button/Button'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { StateVsRef } from './../StateVsRef/StateVsRef'

export const FeedbackSection = () => {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('error')
  const [hasError, setHasError] = useState(true)

  useEffect(() => {
    setHasError(name.trim() === '')
  }, [name])

  return (
    <section>
      <h3>Обратная связь</h3>

      <form className={style.margin}>
        <label htmlFor='name'>Какие ваши полномочия?</label>
        <input
          type='text'
          id='name'
          className={clsx(style.control, { [style.empty]: name.trim() === '' })}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor='reason'>Причина!?</label>
        <select id='reason' className={style.control} value={reason} onChange={(e) => setReason(e.target.value)}>
          <option value='error'>Error-404</option>
          <option value='HahСlassic'>SyntaxError</option>
          <option value='Order'>Order-66</option>
        </select>

        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
      <StateVsRef />
    </section>
  )
}
