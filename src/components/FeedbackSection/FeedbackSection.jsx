import style from './FeedbackSection.module.scss'
import { Button } from './../Button/Button'
import { useState } from 'react'

export const FeedbackSection = () => {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('error')

  const nameChange = (event) => setName(event.target.value)
  const reasonChange = (event) => setReason(event.target.value)

  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor='name'>Какие ваши полномочия?</label>
        <input type='text' id='name' className={style.control} value={name} onChange={nameChange} />

        <label htmlFor='reason'>Причина!?</label>
        <select id='reason' className={style.control} value={reason} onChange={reasonChange}>
          <option value='error'>Error-404</option>
          <option value='HahСlassic'>SyntaxError</option>
          <option value='Order'>Order-66</option>
        </select>

        <Button>Отправить</Button>
      </form>
    </section>
  )
}
